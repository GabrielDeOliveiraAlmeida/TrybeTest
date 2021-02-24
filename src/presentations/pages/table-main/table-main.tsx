import React, { useContext, useEffect } from 'react'
import { MyTable, MainContainer, MyTableContainer } from './styles'
import { MyTableBody, TableHeader } from '@/presentations/components'
import { TableContext } from '@/main/contexts'

const TableMain: React.FC = () => {
  const { loadData } = useContext(TableContext)

  useEffect(() => {
    loadData({
      page: 1
    })
  }, [])

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
