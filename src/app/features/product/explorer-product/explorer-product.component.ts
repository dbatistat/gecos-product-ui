import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ProductService } from '../product.service'
import { Product } from '../product.interfaces'

@Component({
  selector: 'app-explorer-product',
  templateUrl: './explorer-product.component.html',
  styleUrls: ['./explorer-product.component.scss']
})
export class ExplorerProductComponent implements OnInit {
  emailFormControl = new FormControl('')
  products: Product[] = []
  private timeout?: number

  constructor(private readonly productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    await this.loadProducts()
  }

  async search(value: string): Promise<void> {
    window.clearTimeout(this.timeout)
    // Wait 300ms before a request
    this.timeout = window.setTimeout(async () => this.loadProducts(value), 300)
  }

  async loadProducts(filter?: string): Promise<void> {
    this.products = await this.productService.get({ filter })
  }

  async generate(): Promise<void> {
    await this.productService.generate({
      quantity: 5,
      randomNames: ['Celular', 'Router', 'Mouse', 'Teclado']
    })

    await this.loadProducts()
  }
}
