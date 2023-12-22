import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { GeneralContentComponent } from './components/general-content/general-content.component';
import { GeneralContentDetailComponent } from './components/general-content-detail/general-content-detail.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    NaviComponent,
    FooterComponent,
    ProductContentComponent,
    GeneralContentComponent,
    GeneralContentDetailComponent,
    CommunicationComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }