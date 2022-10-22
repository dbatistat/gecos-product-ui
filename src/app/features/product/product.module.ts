import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExplorerProductComponent } from './explorer-product/explorer-product.component'
import { SharedModule } from '../../shared/shared.module'
import { ProductRoutingModule } from './product-routing.module'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { ProductItemComponent } from './product-item/product-item.component'
import { MatListModule } from '@angular/material/list'
import { ProductFormComponent } from './product-form/product-form.component'
import { ProductService } from './product.service'
import { MatDialogModule } from '@angular/material/dialog'
import { DeleteProductDialogComponent } from './delete-product-dialog/delete-product-dialog.component'

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  declarations: [
    ExplorerProductComponent,
    ProductItemComponent,
    ProductFormComponent,
    DeleteProductDialogComponent
  ]
})
export class ProductModule {}
