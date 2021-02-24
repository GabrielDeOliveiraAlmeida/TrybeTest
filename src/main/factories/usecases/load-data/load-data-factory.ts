import { makeAxiosHttpClient, makeApiUrl } from '@/main/factories/http'
import { RemoteLoadData } from '@/data/usecases'
import { LoadData } from '@/domain/usecases'

export const makeRemoteLoadData = (): LoadData =>
  new RemoteLoadData(makeApiUrl('/planets'), makeAxiosHttpClient())
