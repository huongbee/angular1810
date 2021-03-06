import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from 'src/app/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = listProduct;
  isShowForm = false;
  filterMode = 'SHOW_ALL';

  constructor() {
  }

  ngOnInit() {
  }
  getFilter(filter: string) {
    this.filterMode = filter;
  }
}
