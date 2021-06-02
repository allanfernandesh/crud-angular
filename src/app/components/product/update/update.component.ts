import { Product } from './../product.module';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product:Product = {
    name: '',
    price: 0
  }
  

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id || '').subscribe(product => this.product = product);
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto alterado com sucesso");
      this.router.navigate(['/products']);
    })
  }

  cancel():void {
    this.router.navigate(['/products']);
  }

}
