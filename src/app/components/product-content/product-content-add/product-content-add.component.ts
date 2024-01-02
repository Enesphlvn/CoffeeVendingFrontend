import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductContentService } from '../../../services/product-content.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../services/product.service';
import { GeneralContentService } from '../../../services/general-content.service';
import { Product } from '../../../models/product/product';
import { GeneralContent } from '../../../models/general-content/generalContent';

@Component({
  selector: 'app-product-content-add',
  templateUrl: './product-content-add.component.html',
  styleUrl: './product-content-add.component.css',
})
export class ProductContentAddComponent implements OnInit {
  productContentAddForm: FormGroup;
  products: Product[];
  generalContents: GeneralContent[];
  dataLoaded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productContentService: ProductContentService,
    private toastrService: ToastrService,
    private productService: ProductService,
    private generalContentService: GeneralContentService
  ) {}

  ngOnInit(): void {
    this.createProductContentAddForm();
    this.getProducts();
    this.getGeneralContents();
  }

  createProductContentAddForm() {
    this.productContentAddForm = this.formBuilder.group({
      productId: [null, Validators.required],
      generalContentId: [null, Validators.required],
      unit: [null, Validators.required],
    });
    this.dataLoaded = true;
  }

  add() {
    if (this.productContentAddForm.valid) {
      let productContentModel = Object.assign({},this.productContentAddForm.value);
      this.productContentService.add(productContentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
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

  getProducts(){
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    })
  }

  getGeneralContents(){
    this.generalContentService.getGeneralContents().subscribe((response) => {
      this.generalContents = response.data;
    })
  }
}
