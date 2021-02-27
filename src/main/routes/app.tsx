import { MyHeaderPage } from '@/presentations/components'
import React from 'react'
import { TableMain } from '../../presentations/pages/index'
import { FilterProvider, TableProvider } from '../contexts'
import { makeRemoteLoadData } from '../factories/usecases'

const App: React.FC = () => {
  return (
    <TableProvider
      httpMethod={makeRemoteLoadData()} >
      <FilterProvider>
        <MyHeaderPage />
        <TableMain />
      </FilterProvider>
    </TableProvider>
  )
}

export default App
