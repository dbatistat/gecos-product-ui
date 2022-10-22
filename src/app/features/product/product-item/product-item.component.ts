import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Product } from '../product.interfaces'
import { EMPTY_PRODUCT } from '../product.constants'
import { MatDialog } from '@angular/material/dialog'
import { DeleteProductDialogComponent } from '../delete-product-dialog/delete-product-dialog.component'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = EMPTY_PRODUCT
  @Output() reload = new EventEmitter<void>()

  constructor(
    private readonly dialog: MatDialog,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {}

  openDeleteDialog(): void {
    const deleteDialog = this.dialog.open(DeleteProductDialogComponent, {
      width: '350px',
      data: {
        product: this.product
      }
    })

    deleteDialog.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.delete(this.product.id, { delay: '300' })
        this.reload.emit()
      }
    })
  }
}
