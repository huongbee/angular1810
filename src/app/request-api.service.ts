import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ServerResponse } from './types';
import { Store } from '@ngrx/store';

@Injectable()
export class RequestApiService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<Product>) {}

  async getAllProduct(): Promise<Array<Product>>{
    return this.http.get(`${this.url}product`)
    .toPromise()
    .then((result: ServerResponse) => {
      return Promise.resolve(result.products);
    })
    .catch(err=> Promise.reject(err));
  }
  async addProduct(name: string, price: number){
    return this.http.post(
      `${this.url}add-product`,
      { name, price }
    ).toPromise()
    .then((result: ServerResponse)=>{
      if(result.success){
        // update store
        this.store.dispatch({
          type: 'ADD__PRODUCT',
          product: result.product
        })
      }
      else return Promise.reject(new Error(result.message))
    })
    .catch(err=>Promise.reject(err))
  }
  async updateProduct(_id: string, wishlist: boolean){
    return this.http.put(`${this.url}product/${_id}`, { wishlist })
    .toPromise()
    .then((result: ServerResponse)=>{
      if(result.success){
        this.store.dispatch({ type: 'UPDATE_PRODUCT', product: result.product})
      }
      else return Promise.reject(new Error(result.message))
    })
    .catch(err=>Promise.reject(err))
  }
  async deleteProduct(_id: string){
    return this.http.delete(`${this.url}product/${_id}`)
    .toPromise()
    .then((result: ServerResponse)=>{
      if(result.success){
        this.store.dispatch({ type: 'REMOVE__PRODUCT', _id: result.product._id})
      }
      else return Promise.reject(new Error(result.message))
    })
    .catch(err=>Promise.reject(err))
  }
}
