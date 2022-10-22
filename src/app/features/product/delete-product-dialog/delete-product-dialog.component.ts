import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Product } from '../product.interfaces'

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.scss']
})
export class DeleteProductDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Product }) {}

  ngOnInit(): void {}
}
