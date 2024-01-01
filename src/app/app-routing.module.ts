import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { GeneralContentComponent } from './components/general-content/general-content.component';
import { GeneralContentDetailComponent } from './components/general-content-detail/general-content-detail.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BuyComponent } from './components/buy/buy.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { GeneralContentAddComponent } from './components/general-content/general-content-add/general-content-add.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { OperationClaimAddComponent } from './components/operation-claim/operation-claim-add/operation-claim-add.component';
import { ProductContentAddComponent } from './components/product-content/product-content-add/product-content-add.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'productContents/getproductcontentdetails', component: ProductContentComponent},
  { path: 'generalContents/getall', component: GeneralContentComponent },
  { path: 'operationClaims/getall', component: OperationClaimComponent },
  { path: 'products/getbyid/:productId', component: BuyComponent},
  { path: 'products/getproductsbygeneralcontentid/:generalContentId', component: GeneralContentDetailComponent},
  { path: 'products/add', component: ProductAddComponent},
  { path: 'generalContents/add', component: GeneralContentAddComponent},
  { path: 'productContents/add', component: ProductContentAddComponent},
  { path: 'operationClaims/add', component: OperationClaimAddComponent},
  { path: 'communication', component: CommunicationComponent },
  { path: 'aboutUs', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
