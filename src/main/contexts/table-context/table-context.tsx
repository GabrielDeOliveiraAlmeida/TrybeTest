import { LoadData } from '@/domain/usecases/load-data/load-data'
import React, {
  createContext,
  useState
} from 'react'
import { TableContextProps, TableProviderProps } from './type'

const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
)

// eslint-disable-next-line react/prop-types
const TableProvider: React.FC<TableProviderProps> = (props: TableProviderProps) => {
  const { children, httpMethod } = props

  const [data, setData] = useState<LoadData.ModelResults[]>([])
  const [columnsName, setColumnsName] = useState<string[]>([])
  const [invalidColumns] = useState<string[]>(['residents'])
  const [page, setPage] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [countFiltered, setCountFiltered] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const setNewPage = (newPage: number): void => {
    setPage(newPage)
    if ((newPage + 1) * 10 > data.length) {
      loadData({
        page: newPage + 1
      })
    }
  }

  const setCountValue = (newValue: number): void => {
    setCountFiltered(newValue)
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
        countFiltered,
        loading,
        setNewPage,
        loadData,
        getData,
        setCountValue

      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export { TableContext, TableProvider }
