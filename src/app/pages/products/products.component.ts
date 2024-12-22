import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {ProductsInterface} from "../../interfaces/products.interface";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService,
              private router: Router,) { }

  public products: ProductsInterface[] = []
  public textHidden: {[key: number]: boolean} = {};

  ngOnInit(): void {
    //Получаем продукты с сервера
    this.productsService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['']).then();
          }
        }
      )
  }

  //Метод скрытия текста
  isTextHidden(index: number): void {
    this.textHidden[index] = !this.textHidden[index];
  }

}
