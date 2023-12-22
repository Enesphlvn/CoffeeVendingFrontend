import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { GeneralContentDetail } from '../../models/generalContentDetail';

@Component({
  selector: 'app-general-content-detail',
  templateUrl: './general-content-detail.component.html',
  styleUrl: './general-content-detail.component.css'
})
export class GeneralContentDetailComponent implements OnInit {

  products: Product[];
  generalContents: GeneralContentDetail[];
  dataLoaded: boolean = false;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params) =>{
      if(params['generalContentId']){
        this.getProductsByGeneralContentId(params['generalContentId'])
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  getProductsByGeneralContentId(generalContentId: number){
    this.productService.getProductsByCategoryId(generalContentId).subscribe((response) => {
      this.generalContents = response.data;
      this.dataLoaded = true;
    })
  }
}
