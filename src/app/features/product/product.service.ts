import { Injectable } from '@angular/core'
import { HttpClientService } from '../../shared/services/http-client.service'
import {
  AddProduct,
  Params,
  Product,
  ProductSeed,
  UpdateProduct
} from './product.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly httpClientService: HttpClientService) {}

  get(params: Params): Promise<Product[]> {
    return this.httpClientService.get(`/product`, { params })
  }

  getById(id: string, params?: Params): Promise<Product> {
    return this.httpClientService.get(`/product/${id}`, { params })
  }

  add(addProduct: AddProduct, params?: Params): Promise<Product> {
    return this.httpClientService.post(`/product`, addProduct, { params })
  }

  update(updateProduct: UpdateProduct, params?: Params): Promise<Product> {
    return this.httpClientService.put(`/product`, updateProduct, { params })
  }

  delete(id: string, params?: Params): Promise<Product> {
    return this.httpClientService.delete(`/product/${id}`, { params })
  }

  generate(productSeed: ProductSeed): Promise<void> {
    return this.httpClientService.post(`/product/seed`, productSeed)
  }
}
