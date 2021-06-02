import { DeleteComponent } from './components/product/delete/delete.component';
import { UpdateComponent } from './components/product/update/update.component';
import { CreateComponent } from './components/product/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component: CreateComponent
  },
  {
    path: 'products/update/:id',
    component: UpdateComponent
  },
  {
    path:'products/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
