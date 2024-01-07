import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { GeneralContentComponent } from './components/general-content/general-content.component';
import { GeneralContentDetailComponent } from './components/general-content/general-content-detail/general-content-detail.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BuyComponent } from './components/buy/buy.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { GeneralContentAddComponent } from './components/general-content/general-content-add/general-content-add.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { OperationClaimAddComponent } from './components/operation-claim/operation-claim-add/operation-claim-add.component';
import { ProductContentAddComponent } from './components/product-content/product-content-add/product-content-add.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { UserOperationClaimAddComponent } from './components/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { OperationClaimUpdateComponent } from './components/operation-claim/operation-claim-update/operation-claim-update.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { GeneralContentUpdateComponent } from './components/general-content/general-content-update/general-content-update.component';
import { ProductContentUpdateComponent } from './components/product-content/product-content-update/product-content-update.component';
import { UserOperationClaimUpdateComponent } from './components/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';

import { ToastrModule } from 'ngx-toastr';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

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
    FilterPipePipe,
    ProductAddComponent,
    GeneralContentAddComponent,
    OperationClaimComponent,
    OperationClaimAddComponent,
    ProductContentAddComponent,
    UserOperationClaimComponent,
    UserOperationClaimAddComponent,
    OperationClaimUpdateComponent,
    AdminPanelComponent,
    ProductUpdateComponent,
    GeneralContentUpdateComponent,
    ProductContentUpdateComponent,
    UserOperationClaimUpdateComponent,
    LoginComponent,
    RegisterComponent,
    UserUpdateComponent,
    PasswordUpdateComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true, // Aynı içeriğe sahip iki ardışık toast mesajının önlenip önlenmeyeceğini belirtir.
      resetTimeoutOnDuplicate: true, // Tekrarlanan bir toast mesajı olduğunda süre sıfırlansın mı belirtir.
      newestOnTop: true, // Yeni toast mesajlarının en üstte mi yoksa en altta mı görüntüleneceğini belirtir.
      progressBar: false, // Toast mesajının altında bir ilerleme çubuğu görüntülenip görüntülenmeyeceğini belirtir.
      // tapToDismiss: true, // Kullanıcının toast mesajını tıklayarak kapatıp kapatamayacağını belirtir.
      closeButton: true, // Her toast mesajının sağ üst köşesinde bir kapatma düğmesi görüntülenip görüntülenmeyeceğini belirtir.
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
