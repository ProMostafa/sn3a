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
import { ServisesComponent } from './components/servises/servises.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SubserviceComponent } from './components/subservice/subservice.component';
const routes: Routes = [  
  {path:'Home',component:HomeComponent},
{path:'Technision',component:TechnisionComponent},
{path:'Services',component:ServisesComponent},
{path:'Aboutus',component:AboutusComponent},
{path:'Customer',component:CustomerComponent},
{path:'Order/:id',component:OrderDetailsComponent},
{path:'Subservie/:id',component:SubserviceComponent},
{path:'Orders',component:OrdersComponent},
{path:'NewOrder',component:CreateOrderComponent},
{path:'Register',component:RegisterationComponent},
{path:'Login',component:LoginComponent},
{path:'',redirectTo:'/Home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




