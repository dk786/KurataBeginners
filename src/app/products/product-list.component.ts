import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  pageTitle = 'Product List 2';
  imageWidth = 50;
  imageHeight = 50;
  showImg = false;

  // tslint:disable-next-line:variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.perfromFilter(this.listFilter) : this.products;
  }


  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2017',
      description: '15 Gallon capacity cart',
      price: 32.99,
      starRating: 4.2,
      imgUrl: 'https://cdn.pixabay.com/photo/2019/05/05/17/06/gardening-4181074_960_720.jpg'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'GDN-0025',
      releaseDate: 'March 18, 2015',
      description: '16 oz',
      price: 12.99,
      starRating: 3.7,
      imgUrl: 'https://cdn.pixabay.com/photo/2016/08/30/00/22/hammer-1629587_960_720.jpg'

    }];

  toggleImage(): void {
    this.showImg = !this.showImg;
  }

  ngOnInit() {
    console.log('in on   it');
  }

  private perfromFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
