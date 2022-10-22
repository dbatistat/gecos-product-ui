import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductAction } from '../product.types'
import { Product } from '../product.interfaces'
import { ProductService } from '../product.service'
import { EMPTY_PRODUCT } from '../product.constants'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: Product = EMPTY_PRODUCT
  productAction!: ProductAction

  productForm = new FormGroup({
    id: new FormControl({ value: this.product.id, disabled: true }, []),
    code: new FormControl({ value: this.product.code, disabled: false }, [
      Validators.required,
      Validators.minLength(1)
    ]),
    name: new FormControl({ value: this.product.name, disabled: false }, [
      Validators.required,
      Validators.minLength(1)
    ])
  })

  get code() {
    return this.productForm.get('code')
  }
  get name() {
    return this.productForm.get('name')
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productService: ProductService
  ) {}

  async ngOnInit(): Promise<void> {
    this.productAction = this.getProductAction(this.route)

    if (this.productAction.action === 'create') {
      this.product = EMPTY_PRODUCT
      return
    }

    if (this.productAction.id != null) {
      this.product = await this.productService.getById(this.productAction.id)
      this.productForm.patchValue(this.product)
    }
  }

  async handleSubmitProduct(): Promise<void> {
    this.product = this.productForm.getRawValue() as Product

    if (this.productAction.action === 'create') {
      await this.productService.add({
        code: this.product.code,
        name: this.product.name
      })

      await this.router.navigate(['product'])
    }

    if (this.productAction.action === 'edit') {
      await this.productService.update(this.product)

      await this.router.navigate(['product'])
    }
  }

  private getProductAction(route: ActivatedRoute): ProductAction {
    const id = route.snapshot.paramMap.get('id')
    if (!id) {
      return {
        action: 'create',
        title: 'Alta'
      }
    }

    const action = route.snapshot.queryParamMap.get('action')

    if (action === 'view') {
      return {
        id,
        action: 'view',
        title: 'Artículo'
      }
    }

    if (action === 'edit') {
      return {
        id,
        action: 'edit',
        title: 'Editar'
      }
    }

    throw new Error('Action not valid')
  }
}
