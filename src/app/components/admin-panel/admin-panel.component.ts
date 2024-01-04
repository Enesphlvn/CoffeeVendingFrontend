import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GeneralContentService } from '../../services/general-content.service';
import { ProductContentService } from '../../services/product-content.service';
import { Product } from '../../models/product/product';
import { GeneralContent } from '../../models/general-content/generalContent';
import { ProductContent } from '../../models/product-content/productContent';
import { Router } from '@angular/router';
import { OperationClaimService } from '../../services/operation-claim.service';
import { OperationClaim } from '../../models/operation-claim/operationClaim';
import { UserOperationClaim } from '../../models/user-operation-claim/userOperationClaim';
import { UserOperationClaimService } from '../../services/user-operation-claim.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent implements OnInit {
  products: Product[];
  operationClaims: OperationClaim[];
  generalContents: GeneralContent[];
  productContents: ProductContent[];
  userOperationClaims: UserOperationClaim[];
  dataLoaded: boolean = false;
  tableStatus: { [key: string]: boolean } = {
    product: false,
    generalContent: false,
    productContent: false,
    operationClaim: false,
    userOperationClaim: false,
  };

  constructor(
    private productService: ProductService,
    private generalContentService: GeneralContentService,
    private productContentService: ProductContentService,
    private operationClaimService: OperationClaimService,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getGeneralContents();
    this.getProductContents();
    this.getOperationClaims();
    this.getUserOperationClaims();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getGeneralContents() {
    this.generalContentService.getGeneralContents().subscribe((response) => {
      this.generalContents = response.data;
      this.dataLoaded = true;
    });
  }

  getProductContents() {
    this.productContentService.getProductContents().subscribe((response) => {
      this.productContents = response.data;
      this.dataLoaded = true;
    });
  }

  getOperationClaims(){
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.operationClaims = response.data;
      this.dataLoaded = true;
    });
  }

  getUserOperationClaims(){
    this.userOperationClaimService.getUserOperationClaims().subscribe((response) => {
      this.userOperationClaims = response.data;
      this.dataLoaded = true;
    });
  }

  toggleTable(tableName: string) {
    this.tableStatus[tableName] = !this.tableStatus[tableName];
  }

  productAdd(){
    this.router.navigate(['products/add']);
  }

  generalContentAdd(){
    this.router.navigate(['generalContents/add']);
  }

  productContentAdd(){
    this.router.navigate(['productContents/add']);
  }

  operationClaimAdd(){
    this.router.navigate(['operationClaims/add']);
  }

  userOperationClaimAdd(){
    this.router.navigate(['userOperationClaims/add']);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.toastrService.error('Sistemden çıkış yapıldı');
  }
}
