import React, { useContext, useEffect } from 'react'
import { MyTable, MainContainer, MyTableContainer, ContainerGrid } from './styles'
import { MyTableBody, TableHeader } from '@/presentations/components'
import { TableContext } from '@/main/contexts'
import MyTablePagination from '@/presentations/components/table-pagination/table-pagination'

const TableMain: React.FC = () => {
  const { loadData } = useContext(TableContext)

  useEffect(() => {
    loadData({
      page: 1
    })
  }, [])

  return (
    <MainContainer className={'test'} container>
      <ContainerGrid>
        <MyTableContainer>
          <MyTable stickyHeader aria-label="sticky table">
            <TableHeader />
            <MyTableBody />
          </MyTable>
        </MyTableContainer>
        <MyTablePagination />
      </ContainerGrid>
    </MainContainer>
  )
}

export default TableMain
