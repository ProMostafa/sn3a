import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HomeComponent } from './components/home/home.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TechnisionComponent } from './components/technision/technision.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SubserviceComponent } from './components/subservice/subservice.component';
import { ServicesComponent } from './components/services/services.component';
import { ContentComponent } from './components/content/content.component';
import { ProductsComponent } from './components/products/products.component';
import { SubproductsComponent } from './components/subproducts/subproducts.component';

const routes: Routes = [  
  {path:'Content',component:ContentComponent},
  {path:'Contact',component:HomeComponent},
{path:'Technision',component:TechnisionComponent},
{path:'Services',component:ServicesComponent},
{path:'Products',component:ProductsComponent},
{path:'Aboutus',component:AboutusComponent},
{path:'Customer',component:CustomerComponent},
{path:'Order/:id',component:OrderDetailsComponent},
{path:'Subservice/:id',component:SubserviceComponent},
{path:'Subproduct/:id',component:SubproductsComponent},
{path:'Orders',component:OrdersComponent},
{path:'NewOrder',component:CreateOrderComponent},
{path:'Register',component:RegisterationComponent},
{path:'Login',component:LoginComponent},
{path:'',redirectTo:'/Content',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



