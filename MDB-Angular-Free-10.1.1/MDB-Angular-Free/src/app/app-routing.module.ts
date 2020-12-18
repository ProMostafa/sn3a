import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnisionComponent } from './components/technision/technision.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [  
{path:'Technision',component:TechnisionComponent},
{path:'Services',component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




