import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail view';
  product = {} as IProduct;

  constructor(private  route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.product.productId = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
