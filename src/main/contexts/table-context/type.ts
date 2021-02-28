import { LoadData } from '@/domain/usecases'

export type TableProviderProps = {
  httpMethod: LoadData
  children: React.ReactNode
}

export type TableContextProps = {
  data: LoadData.ModelResults[]
  page: number
  count: number
  countFiltered: number
  loading: boolean
  columnsName: string[]
  invalidColumns: string[]
  loadData: (page: LoadData.Params) => Promise<void>
  getData: () => Promise<void>
  setNewPage: (page: number) => void
  setCountValue: (newValue: number) => void

}
