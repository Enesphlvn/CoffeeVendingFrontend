import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { GeneralContentComponent } from './components/general-content/general-content.component';
import { GeneralContentDetailComponent } from './components/general-content-detail/general-content-detail.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'productContents/getproductcontentdetails', component: ProductContentComponent},
  { path: 'generalContents/getall', component: GeneralContentComponent },
  { path: 'products/getproductsbygeneralcontentid/:generalContentId', component: GeneralContentDetailComponent},
  { path: 'communication', component: CommunicationComponent },
  { path: 'aboutUs', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
