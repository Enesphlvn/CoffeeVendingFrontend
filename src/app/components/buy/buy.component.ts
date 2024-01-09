import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user/user';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
})
export class BuyComponent implements OnInit {
  products: Product[];
  users: User[];
  product: any;
  orderAddForm: FormGroup;
  dataLoaded: boolean = false;
  isLoading: boolean = false;
  successMessage: string;
  name: string = '';
  userEmail: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private toastrService: ToastrService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.check();
    this.activatedRoute.params.subscribe((params) => {
      if (params['productId']) {
        this.getProductById(params['productId']);
      }
    });
    this.getUsers();
  }

  createOrderAddForm() {
    this.orderAddForm = this.formBuilder.group({
      userId: [null, Validators.required],
      userName: [null],
      productId: [this.product.id, Validators.required],
      amountPaid: [null, Validators.required],
    });

    this.getUserIdAndUpdateForm();
  }

  getUserIdAndUpdateForm() {
    this.userService.getByMail(this.userEmail).subscribe(
      (response) => {
        const userName = response.data.firstName + ' ' + response.data.lastName;
        const userId = response.data.id;
        this.orderAddForm.get('userId').setValue(userId);
        this.orderAddForm.get('userName').setValue(userName);
      },
      (responseError) => {
        this.toastrService.error('Kullanıcı adı alınamadı', 'Hata');
      }
    );
  }

  add() {
    if (this.orderAddForm.valid) {
      let orderModel = Object.assign({}, this.orderAddForm.value);
      this.orderService.add(orderModel).subscribe(
        (response) => {
          this.isLoading = true;
          this.warningMessage();
          setTimeout(() => {
            this.successMessage = response.message;
            this.isLoading = false;

            if (this.successMessage) {
              setTimeout(() => {
                location.reload();
              }, 2000);
            }
          }, 4000);
        },
        (responseError) => {
          this.isLoading = false;
          if (responseError.error.success === false) {
            this.toastrService.error(
              responseError.error.message,
              'Ödeme Başarısız'
            );
          } else if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductById(productId: number) {
    this.productService.getById(productId).subscribe((response: any) => {
      this.product = response.data;
      this.createOrderAddForm();
      this.dataLoaded = true;
    });
  }

  check() {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded: any = jwtDecode(token);

      if (
        !this.name &&
        decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
      ) {
        this.name =
          decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        this.userEmail = decoded['email'];
      }
    }
  }

  warningMessage() {
    this.toastrService.info('Siparişiniz hazırlanıyor...', 'Lütfen Bekleyin', {
      timeOut: 4000,
      extendedTimeOut: 4000,
      progressBar: true,
    });
  }
}
