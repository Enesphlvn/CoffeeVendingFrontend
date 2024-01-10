import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[];
  dataLoaded: boolean = false;
  filterText: string = '';
  name: string = '';
  admin: string = '';
  loginCheck: boolean = false;
  adminCheck: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.check();
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  check() {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded: any = jwtDecode(token);

      if (!this.name && decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']) {
        this.name = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      }

      this.loginCheck = true;
      this.checkRole();

    } else {
      this.loginCheck = false;
    }
  }

  checkRole(){
    const token = localStorage.getItem('token');

    if (token) {
      const decoded: any = jwtDecode(token);

      if (!this.admin && decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) {
        this.admin = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

        if (this.admin === 'admin') {
          this.adminCheck = true;
        }
        else {
          this.adminCheck = false;
        }
      }
    }
  }

  adminPanel() {
    this.router.navigate(['adminPanel']);
  }
}
