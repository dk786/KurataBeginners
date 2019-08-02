import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {
  }

  pageTitle = 'Product List 2';
  imageWidth = 50;
  imageHeight = 50;
  showImg = false;
  listFilter = 'cart';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2017',
      description: '15 Gallot calpacity cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://cdn.pixabay.com/photo/2019/05/05/17/06/gardening-4181074_960_720.jpg'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'GDN-0025',
      releaseDate: 'March 18, 2015',
      description: '16 oz',
      price: 12.99,
      starRating: 4.7,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/08/30/00/22/hammer-1629587_960_720.jpg'

    }];

  toggleImage(): void {
    this.showImg = !this.showImg;
  }

  ngOnInit() {
  }

}
