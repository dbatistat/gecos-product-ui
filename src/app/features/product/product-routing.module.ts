import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from 'src/app/shared/layout/layout.component'

import { ExplorerProductComponent } from './explorer-product/explorer-product.component'
import { ProductFormComponent } from './product-form/product-form.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ExplorerProductComponent },
      { path: 'new', component: ProductFormComponent },
      { path: ':id', component: ProductFormComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
