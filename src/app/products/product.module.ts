import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list.component';
import {ConvertToSpacePipe} from './shared/convert-to-space-pipe';
import {ProductDetailComponent} from './product-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
