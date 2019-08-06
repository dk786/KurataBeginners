import {Injectable} from '@angular/core';
import {IProduct} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getProducts(): IProduct[] {
    return [
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
        productId: 3,
        productName: 'Garden Bench',
        productCode: 'GDN-0024',
        releaseDate: 'March 19, 2017',
        description: 'Somewhere to sit in your Garden',
        price: 1509,
        starRating: 4.7,
        imgUrl: 'https://cdn.pixabay.com/photo/2018/10/31/20/33/garden-bench-3786643_960_720.jpg'
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

      }
    ];
  }
}
