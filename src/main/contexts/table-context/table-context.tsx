import { LoadData } from '@/domain/usecases/load-data/load-data'
import React, {
  createContext,
  useState
} from 'react'

type TableContextProps = {
  data: LoadData.Model[]
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
  const [data, setData] = useState<LoadData.Model[]>([])

  const loadData = async (params: LoadData.Params): Promise<void> => {
    console.log('Load Data', params)
    // eslint-disable-next-line react/prop-types
    const data = await httpMethod.loadData({
      page: params.page
    })

    console.log(data)
    setData(data)
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
