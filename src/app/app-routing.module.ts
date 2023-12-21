import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { GeneralContentComponent } from './components/general-content/general-content.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent },
  { path: 'productContents/getproductcontentdetails', component: ProductContentComponent },
  { path: 'generalContents/getall', component: GeneralContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
