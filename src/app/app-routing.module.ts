import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductComponent} from "./pages/product/product.component";
import {OrderComponent} from "./pages/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'order/:product', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
