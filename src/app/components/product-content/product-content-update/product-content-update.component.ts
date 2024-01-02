import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductContentService } from '../../../services/product-content.service';
import { ProductService } from '../../../services/product.service';
import { GeneralContentService } from '../../../services/general-content.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ProductContentUpdate } from '../../../models/product-content/productContentUpdate';
import { Product } from '../../../models/product/product';
import { GeneralContent } from '../../../models/general-content/generalContent';

@Component({
  selector: 'app-product-content-update',
  templateUrl: './product-content-update.component.html',
  styleUrl: './product-content-update.component.css',
})
export class ProductContentUpdateComponent implements OnInit {
  productContent: ProductContentUpdate;
  productContentUpdateForm: FormGroup;
  products: Product[];
  generalContents: GeneralContent[];
  dataLoaded: boolean = false;
  id: number;

  constructor(
    private formbuilder: FormBuilder,
    private productContentService: ProductContentService,
    private productService: ProductService,
    private generalContentService: GeneralContentService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['productContentId'];
      this.getProductContentById(params['productContentId']);
    })
    this.getProducts();
    this.getGeneralContents();
  }

  createProductContentUpdateForm() {
    this.productContentUpdateForm = this.formbuilder.group({
      id: [this.productContent.id, Validators.required],
      productId: [this.productContent.productId, Validators.required],
      generalContentId: [this.productContent.generalContentId, Validators.required,],
      unit: [this.productContent.unit, Validators.required],
    });
    this.dataLoaded = true;
  }

  update(){
    if(this.productContentUpdateForm.valid){
      let productContentUpdateModel = Object.assign({}, this.productContentUpdateForm.value);
      this.productContentService.update(productContentUpdateModel).subscribe(
        (response) => {
        this.toastrService.success(response.message);
      },
      (responseError) => {
        if (responseError.error.ValidationErrors.length > 0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');
          }
        }
      })
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getProductContentById(id: number){
    this.productContentService.getById(id).subscribe((response) => {
      this.productContent = response.data;
      this.createProductContentUpdateForm();
    })
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
