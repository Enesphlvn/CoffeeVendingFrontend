import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { BuyComponent } from './components/buy/buy.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';

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
    AboutUsComponent,
    BuyComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true, // Aynı içeriğe sahip iki ardışık toast mesajının önlenip önlenmeyeceğini belirtir.
      resetTimeoutOnDuplicate: true, // Tekrarlanan bir toast mesajı olduğunda süre sıfırlansın mı belirtir.
      newestOnTop: true, // Yeni toast mesajlarının en üstte mi yoksa en altta mı görüntüleneceğini belirtir.
      progressBar: false, // Toast mesajının altında bir ilerleme çubuğu görüntülenip görüntülenmeyeceğini belirtir.
      tapToDismiss: true, // Kullanıcının toast mesajını tıklayarak kapatıp kapatamayacağını belirtir.
      closeButton: false, // Her toast mesajının sağ üst köşesinde bir kapatma düğmesi görüntülenip görüntülenmeyeceğini belirtir.
    })
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }