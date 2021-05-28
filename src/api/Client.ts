import axios, { Method } from 'axios'

const timeout: number = 30000

export default abstract class Client {
  get cors(): string {
    return 'https://corse.app-develop.space/'
  }

  get headers() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  request(method: Method, uri: string, params: any, cors: boolean) {
    const url = cors ? `${this.cors}${uri}` : uri
    return axios({ method, headers: this.headers, timeout, url, params })
  }
}
