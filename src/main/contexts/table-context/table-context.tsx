import { LoadData } from '@/domain/usecases/load-data/load-data'
import React, {
  createContext,
  useState
} from 'react'

type TableContextProps = {
  data: LoadData.ModelResults[]
  page: number
  count: number
  loading: boolean
  columnsName: string[]
  invalidColumns: string[]
  loadData: (page: LoadData.Params) => Promise<void>
  getData: () => Promise<void>
  setNewPage: (page: number) => void
}

const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
)

type TableProviderProps = {
  httpMethod: LoadData
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
const TableProvider: React.FC<TableProviderProps> = (props: TableProviderProps) => {
  const { children, httpMethod } = props

  const [data, setData] = useState<LoadData.ModelResults[]>([])
  const [columnsName, setColumnsName] = useState<string[]>([])
  const [invalidColumns] = useState<string[]>(['residents'])
  const [page, setPage] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const setNewPage = (newPage: number): void => {
    setPage(newPage)
    if ((newPage + 1) * 10 > data.length) {
      loadData({
        page: newPage + 1
      })
    }
  }

  const loadData = async (params: LoadData.Params): Promise<void> => {
    const { page } = params
    setLoading(true)
    const getData = await httpMethod.loadData({
      page: page
    })
    setLoading(false)
    setData([...data, ...getData.results])
  }
  const getData = async (): Promise<void> => {
    const getData = await httpMethod.loadData({
      page: page
    })
    const result: LoadData.ModelResults[] = getData.results

    setColumnsName(Object.keys(result[0]))
    setCount(getData.count)
    setLoading(false)
    setData([...data, ...getData.results])
  }

  return (
    <TableContext.Provider
      value={{
        data,
        columnsName,
        invalidColumns,
        page,
        count,
        loading,
        setNewPage,
        loadData,
        getData
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export { TableContext, TableProvider }
