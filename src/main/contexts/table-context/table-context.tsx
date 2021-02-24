import { LoadData } from '@/domain/usecases/load-data/load-data'
import React, {
  createContext,
  useState
} from 'react'

type TableContextProps = {
  data: LoadData.ModelResults[]
  loadData: (page: LoadData.Params) => Promise<void>
}

const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
)

type TableProviderProps = {
  httpMethod: LoadData
}

// eslint-disable-next-line react/prop-types
const TableProvider: React.FC<TableProviderProps> = ({ children, httpMethod }) => {
  const [data, setData] = useState<LoadData.ModelResults[]>([])

  const loadData = async (params: LoadData.Params): Promise<void> => {
    console.log('Load Data', params)
    // eslint-disable-next-line react/prop-types
    const getData = await httpMethod.loadData({
      page: params.page
    })

    console.log(getData.results, getData.count)
    setData(getData.results)
  }

  return (
    <TableContext.Provider
    value = {{
      data,
      loadData
    }}
    >
      {children}
    </TableContext.Provider>
  )
}

export { TableContext, TableProvider }
