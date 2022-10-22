import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import * as qs from 'qs'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClientException } from '../exceptions/http-client.exception'
import { LoaderService } from '../global-spinner/loader.service'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private readonly instance: AxiosInstance

  constructor(private readonly loadingService: LoaderService) {
    const requestConfig: AxiosRequestConfig = {
      paramsSerializer: (params: object) =>
        qs.stringify(params, { arrayFormat: 'brackets' }),
      baseURL: environment.gecosApiUrl
    }

    this.instance = axios.create(requestConfig)

    this.instance.interceptors.request.use((req) => this.interceptRequest(req))

    this.instance.interceptors.response.use(
      (res) => this.interceptResponse(res),
      (error: AxiosError) => {
        this.loadingService.setLoading(false)
        // TODO: Add here validation for http exceptions
        return Promise.reject(new HttpClientException(error))
      }
    )
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.get(url, {
      ...config
    })
  }

  post(url: string, data: unknown, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.post(url, data, {
      ...config
    })
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.delete(url, {
      ...config
    })
  }

  put(url: string, data: unknown, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.put(url, data, {
      ...config
    })
  }

  patch(url: string, data: unknown, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.patch(url, data, {
      ...config
    })
  }

  private interceptRequest(request: AxiosRequestConfig): AxiosRequestConfig {
    this.loadingService.setLoading(true)
    // set timestamp to calculate response time
    request.headers.ts = performance.now()

    return request
  }

  private interceptResponse(response: AxiosResponse): AxiosResponse {
    this.loadingService.setLoading(false)
    return response.data
  }
}
