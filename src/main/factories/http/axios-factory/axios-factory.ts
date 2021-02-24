import { AxiosHttpClient } from '@/infra/http/index'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
