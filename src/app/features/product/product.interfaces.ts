export interface BaseProduct {
  readonly code: string
  readonly name: string
}

export interface Product extends BaseProduct {
  readonly id: string
}

export interface AddProduct extends BaseProduct {}

export interface UpdateProduct extends Product {}

export interface Params {
  readonly filter?: string
  readonly delay?: string
}

export interface ProductSeed {
  readonly quantity: number
  readonly randomNames: string[]
}
