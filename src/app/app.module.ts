import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { ParentComponent } from './components/interact/parent.component';
import { ChildComponent } from './components/interact/child.component';
import { AddProductComponent } from './components/product/add-product.component';
import { FilterProductComponent } from './components/product/filter-product.component';
import { ItemProductComponent } from './components/product/item-product.compoment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SignupComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    AddProductComponent,
    FilterProductComponent,
    ItemProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
