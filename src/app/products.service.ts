import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Product[] {
    return [
      {name: "monitor", quantity: 10},
      {name: "keyboard", quantity: 5},
      {name: "mouse", quantity: 6},

    ]
  }
}

export class Product {
  name: string;
  quantity: number;
}
