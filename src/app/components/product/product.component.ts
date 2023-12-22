import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[];
  dataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   if (params['generalContentId']) {
    //     this.getProductsByGeneralContentId(params['generalContentId']);
    //   } else {
    //     this.getProducts();
    //   }
    // });

    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  // getProductsByGeneralContentId(generalContentId: number) {
  //   this.productService
  //     .getProductsByCategoryId(generalContentId)
  //     .subscribe((response) => {
  //       this.products = response.data;
  //       this.dataLoaded = true;
  //     });
  // }
}
