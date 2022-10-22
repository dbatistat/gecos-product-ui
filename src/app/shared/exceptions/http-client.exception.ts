import { AxiosError, AxiosResponse } from 'axios'

export class HttpClientException extends Error {

  code?: string
  request?: any
  response?: AxiosResponse

  constructor(error: AxiosError) {
    super()
    this.name = this.constructor.name
    if (error) {
      this.code = error.code
      this.request = error.request
      this.response = error.response
      this.stack = error.stack
    }

    // override axios error message to make it more useful
    const status = this.response ? this.response.status : ''

    this.message = !error.config
      ? `${status} Unknown`
      : `${status} ${error.config.method?.toUpperCase()} ${error.config.url}`
  }
}
