import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product:Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct():void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Cadastrado com sucesso!");
      this.router.navigate(['/products']);
    });
  }
  cancel():void {
    this.router.navigate(['/products']);
  }

}
