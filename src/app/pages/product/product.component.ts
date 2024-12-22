import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {ProductsInterface} from "../../interfaces/products.interface";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductsInterface;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    //Получение продукта с сервера
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productsService.getProduct(+params['id'])
        .subscribe(
          {
            next: data => {
              this.product = data
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['']).then();
            }
          }
        )
      }
    });
  }
}
