import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  dataLoaded: boolean = false;
  productUpdateForm: FormGroup;
  product: Product;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['productId'];
      this.getProductById(params['productId']);
    });
  }

  createProductUpdateForm() {
    this.productUpdateForm = this.formBuilder.group({
      id: [this.product.id, Validators.required],
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required],
      imagePath: [this.product.imagePath, Validators.required],
    });
    this.dataLoaded = true;
  }

  update() {
    if (this.productUpdateForm.valid) {
      let productUpdateModel = Object.assign({}, this.productUpdateForm.value);
      this.productService.update(productUpdateModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.adminPanel();
        },
        (responseError) => {
          if (responseError.error.Message) {
            this.toastrService.error('Yetkiniz yok');
          }
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getProductById(id: number) {
    this.productService.getById(id).subscribe((response) => {
      this.product = response.data;
      this.createProductUpdateForm();
    });
  }

  adminPanel() {
    this.router.navigate(['adminPanel']);
  }
}
