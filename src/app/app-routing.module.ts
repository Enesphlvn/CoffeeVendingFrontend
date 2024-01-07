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
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'productContents/getproductcontentdetails', component: ProductContentComponent},
  { path: 'products/getbyid/:productId', component: BuyComponent, canActivate: [LoginGuard]},
  { path: 'products/getbyid/:productId/update', component: ProductUpdateComponent, canActivate: [LoginGuard]},
  { path: 'generalContents/getbyid/:generalContentId', component: GeneralContentUpdateComponent, canActivate: [LoginGuard]},
  { path: 'productContents/getbyid/:productContentId', component: ProductContentUpdateComponent, canActivate: [LoginGuard]},
  { path: 'products/getproductsbygeneralcontentid/:generalContentId', component: GeneralContentDetailComponent},
  { path: 'operationClaims/getbyid/:operationClaimId', component: OperationClaimUpdateComponent, canActivate: [LoginGuard]},
  { path: 'userOperationClaims/getbyid/:userOperationClaimId', component: UserOperationClaimUpdateComponent, canActivate: [LoginGuard]},
  { path: 'products/add', component: ProductAddComponent, canActivate: [LoginGuard]},
  { path: 'generalContents/add', component: GeneralContentAddComponent, canActivate: [LoginGuard]},
  { path: 'productContents/add', component: ProductContentAddComponent, canActivate: [LoginGuard]},
  { path: 'operationClaims/add', component: OperationClaimAddComponent, canActivate: [LoginGuard]},
  { path: 'userOperationClaims/add', component: UserOperationClaimAddComponent, canActivate: [LoginGuard]},
  { path: 'generalContents/getall', component: GeneralContentComponent },
  { path: 'operationClaims/getall', component: OperationClaimComponent },
  { path: 'userOperationClaims/getall', component: UserOperationClaimComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'communication', component: CommunicationComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'adminPanel', component: AdminPanelComponent },
  { path: 'productUpdate', component: ProductUpdateComponent },
  { path: 'userUpdate', component: UserUpdateComponent },
  { path: 'passwordUpdate', component: PasswordUpdateComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
