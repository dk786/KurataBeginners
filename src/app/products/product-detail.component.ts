import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail view';
  product = {} as IProduct;

  constructor(private  route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
    // this.product.productId = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id} `;
    this.product = {
      productId: 7,
      productName: 'Leaf Rake',
      productCode: 'GDN-0027',
      releaseDate: 'Feb 18, 2017',
      description: 'Large rake with 24 inch spread',
      price: 15.00,
      starRating: 1.7,
      imgUrl: 'https://cdn.pixabay.com/photo/2019/05/05/17/06/gardening-4181074_960_720.jpg'
    };
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}
