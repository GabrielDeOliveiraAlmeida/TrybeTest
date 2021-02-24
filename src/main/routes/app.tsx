import React from 'react'
import { TableMain } from '../../presentations/pages/index'
import { TableProvider } from '../contexts'
import { makeRemoteLoadData } from '../factories/usecases'

const App: React.FC = () => {
  return (
        <TableProvider
          httpMethod={makeRemoteLoadData()} >
            <TableMain />
        </TableProvider>
  )
}

export default App
