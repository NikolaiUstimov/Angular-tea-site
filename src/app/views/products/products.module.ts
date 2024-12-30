import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';

import {RouterModule} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
