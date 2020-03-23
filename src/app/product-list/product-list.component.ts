import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(productName) {
    window.alert( productName + ' has been shared!');
  }

  onNotify(thisProduct) {
    window.alert('You will receive a notification when ' + thisProduct.name + ' is less than $' + thisProduct.price +'.00.')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/