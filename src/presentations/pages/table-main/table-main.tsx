import React from 'react'
import { MyTableContainer, MyTable, MainContainer } from './styles'
import { MyTableBody, TableHeader } from '@/presentations/components'

const TableMain: React.FC = () => {
  return (
    <MainContainer className={'test'} container>
      <MyTableContainer>
          <MyTable stickyHeader>
            <TableHeader />
            <MyTableBody />
          </MyTable>
      </MyTableContainer>
    </MainContainer>
  )
}

export default TableMain