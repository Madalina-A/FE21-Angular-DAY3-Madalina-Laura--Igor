import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { ProdListComponent } from './prod-list/prod-list.component';

const routes: Routes = [
  {
    path:'', component: ProdListComponent
  },
  {
    path:'products/:id', component: ProdDetailsComponent
  },
  {
    path:'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
