
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TechnisionComponent } from './components/technision/technision.component';
import { ServicesComponent } from './components/services/services.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { SubserviceComponent } from './components/subservice/subservice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { SubproductsComponent } from './components/subproducts/subproducts.component';
// import { ControlValueAccessor } from '@angular/forms';
// import { Validator, AbstractControl } from '@angular/forms';
// import { RouterLinkWithHref, Router } from '@angular/router';
// import { SafeHtml } from '@angular/platform-browser';
// import { DomSanitizer } from '@angular/platform-browser';
// import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    
    AppComponent,
    TechnisionComponent,
    ServicesComponent,
    NavComponent,
    AboutusComponent,
    CreateOrderComponent,
    CustomerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    OrderDetailsComponent,
    OrdersComponent,
    PagenotfoundComponent,
    RegisterationComponent,
    ServicesComponent,
    SubserviceComponent,
    NavbarComponent,
    ContentComponent,
    ProductsComponent,
    SubproductsComponent
  ],
  imports: [
    // FormGroup ,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
//     ControlValueAccessor,
//  AbstractControl,
//  RouterLinkWithHref,
//   Router ,
//     SafeHtml ,
//     DomSanitizer 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
