import { MyHeaderPage } from '@/presentations/components'
import { GlobalStyle } from '@/presentations/styles/global'
import React from 'react'
import { TableMain } from '../../presentations/pages/index'
import { FilterProvider, TableProvider } from '../contexts'
import { makeRemoteLoadData } from '../factories/usecases'

const App: React.FC = () => {
  return (
    <TableProvider
      httpMethod={makeRemoteLoadData()} >
      <FilterProvider>
        <GlobalStyle />
        <MyHeaderPage />
        <TableMain />
      </FilterProvider>
    </TableProvider>
  )
}

export default App
