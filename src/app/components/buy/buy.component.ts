import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user/user';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
})
export class BuyComponent implements OnInit {
  products: Product[];
  product: any;
  orderAddForm: FormGroup;
  users: User[];
  dataLoaded: boolean = false;
  successMessage: string;
  isLoading: boolean = false;

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
      productId: [this.product.id, Validators.required],
      amountPaid: [null, Validators.required],
    });
  }

  add() {
    if (this.orderAddForm.valid) {
      let orderModel = Object.assign({}, this.orderAddForm.value);
      this.orderService.add(orderModel).subscribe(
        (response) => {
          this.isLoading = true;
          this.toastrService.info('Siparişiniz hazırlanıyor...', 'Lütfen Bekleyin')
          setTimeout(() => {
            this.successMessage = response.message;
            this.isLoading = false;
          }, 4000)
        },
        (responseError) => {
          this.isLoading = false;
          if (responseError.error.success === false) {
            this.toastrService.error(responseError.error.message, 'Ödeme Başarısız');
          }
          else if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');
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

  completed(){
    this.router.navigate(['/']);
  }
}
