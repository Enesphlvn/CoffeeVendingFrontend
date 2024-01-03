import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { GeneralContentComponent } from './components/general-content/general-content.component';
import { GeneralContentDetailComponent } from './components/general-content/general-content-detail/general-content-detail.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BuyComponent } from './components/buy/buy.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { GeneralContentAddComponent } from './components/general-content/general-content-add/general-content-add.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { OperationClaimAddComponent } from './components/operation-claim/operation-claim-add/operation-claim-add.component';
import { ProductContentAddComponent } from './components/product-content/product-content-add/product-content-add.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { UserOperationClaimAddComponent } from './components/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { GeneralContentUpdateComponent } from './components/general-content/general-content-update/general-content-update.component';
import { ProductContentUpdateComponent } from './components/product-content/product-content-update/product-content-update.component';
import { OperationClaimUpdateComponent } from './components/operation-claim/operation-claim-update/operation-claim-update.component';
import { UserOperationClaimUpdateComponent } from './components/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'productContents/getproductcontentdetails', component: ProductContentComponent},
  { path: 'products/getbyid/:productId', component: BuyComponent},
  { path: 'products/getbyid/:productId/update', component: ProductUpdateComponent},
  { path: 'generalContents/getbyid/:generalContentId', component: GeneralContentUpdateComponent},
  { path: 'productContents/getbyid/:productContentId', component: ProductContentUpdateComponent},
  { path: 'products/getproductsbygeneralcontentid/:generalContentId', component: GeneralContentDetailComponent},
  { path: 'operationClaims/getbyid/:operationClaimId', component: OperationClaimUpdateComponent},
  { path: 'userOperationClaims/getbyid/:userOperationClaimId', component: UserOperationClaimUpdateComponent},
  { path: 'products/add', component: ProductAddComponent},
  { path: 'generalContents/add', component: GeneralContentAddComponent},
  { path: 'productContents/add', component: ProductContentAddComponent},
  { path: 'operationClaims/add', component: OperationClaimAddComponent},
  { path: 'userOperationClaims/add', component: UserOperationClaimAddComponent},
  { path: 'login', component: LoginComponent},
  { path: 'generalContents/getall', component: GeneralContentComponent },
  { path: 'operationClaims/getall', component: OperationClaimComponent },
  { path: 'userOperationClaims/getall', component: UserOperationClaimComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'adminPanel', component: AdminPanelComponent },
  { path: 'productUpdate', component: ProductUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
