import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnisionComponent } from './components/technision/technision.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HomeComponent } from './components/home/home.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServisesComponent } from './components/servises/servises.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SubserviceComponent } from './components/subservice/subservice.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TechnisionComponent,
    CustomerComponent,
    OrdersComponent,
    OrderDetailsComponent,
    HomeComponent,
    CreateOrderComponent,
    LoginComponent,
    RegisterationComponent,
    PagenotfoundComponent,
    ServisesComponent,
    AboutusComponent,
    SubserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // MDBBootstrapModule.forRoot(),
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
