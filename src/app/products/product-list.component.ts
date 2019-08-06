import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductsServiceObservable} from './services/products.service.observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductsServiceObservable) {
  }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageHeight = 50;
  showImg = false;
  errorMessage;

  // tslint:disable-next-line:variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImg = !this.showImg;
  }

  ngOnInit() {
    console.log('in ngOnInit');
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
        this.listFilter = 'Garden';
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => this.errorMessage = error as any
    );
    console.log('Products: ' + this.products);
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
