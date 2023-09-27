import {Component} from '@angular/core';
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private productService: ProductsService) {
    console.log(productService.getProducts());
  }
}
