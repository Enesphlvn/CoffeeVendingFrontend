import { Component, OnInit } from '@angular/core';
import { ProductContentService } from '../../services/product-content.service';
import { ProductContent } from '../../models/product-content/productContent';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.css'
})
export class ProductContentComponent implements OnInit {

  dataLoaded: boolean = false;
  productContents: ProductContent[];

  constructor(private productContentService : ProductContentService) {}

  ngOnInit(): void {
    this.getProductContents();
  }

  getProductContents(){
    this.productContentService.getProductContents().subscribe((response) => {
      this.productContents = response.data;
      this.dataLoaded = true;
    })
  }
}
