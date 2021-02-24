import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { LoadData } from '@/domain/usecases/load-data/load-data'

export class RemoteLoadData implements LoadData {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadData.Model>
  ) {}

  async loadData (params: LoadData.Params): Promise<LoadData.Model> {
    let url = this.url
    if (params.page) {
      url = `${this.url}/?page=${params.page}`
    }
    const httpResponse = await this.httpClient.request({
      url: url,
      method: 'get'
    })
    const data = httpResponse.body || {} as LoadData.Model
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return data
      case HttpStatusCode.noContent: return {} as LoadData.Model
      default: throw new Error()
    }
  }
}

export namespace RemoteLoadData {
  export type Params = LoadData.Params
  export type Model = LoadData.Model
}
