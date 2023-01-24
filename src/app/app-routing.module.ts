import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';

import { AuthentificationComponent } from './authentification/authentification.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'authentification',
    component: AuthentificationComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
  },
  {
    path: 'addProduct',
    component: AddproductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
