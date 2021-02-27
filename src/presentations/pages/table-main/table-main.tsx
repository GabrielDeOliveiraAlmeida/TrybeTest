import React, { useContext, useEffect } from 'react'
import { MyTable, MainContainer, MyTableContainer, ContainerGrid, ContainerFilterMain, ContainerFilterItem } from './styles'
import { MyTableBody, TableHeader } from '@/presentations/components'
import { TableContext } from '@/main/contexts'
import MyTablePagination from '@/presentations/components/table/table-pagination/table-pagination'
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import { TextField } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList'
import Button from '@material-ui/core/Button/Button'
import DialogBox from '@/presentations/components/dialog-box/dialog-box'

const TableMain: React.FC = () => {
  const { getData, loading } = useContext(TableContext)

  useEffect(() => {
    getData()
  }, [])

  const filtroContainer = (): JSX.Element => {
    return (
      <ContainerFilterMain container item>
        <ContainerFilterItem item>
          <TextField
            variant="standard"
            label={'Filtrar pelo Nome'}
          ></TextField>
        </ContainerFilterItem>
        <ContainerFilterItem item>
          <Button
            variant="text"
            startIcon={<FilterListIcon />}
            onClick={() => { }}
          >
            Filtros
      </Button>
        </ContainerFilterItem>
      </ContainerFilterMain>
    )
  }
  return (
    <MainContainer container>
      <DialogBox />
      {filtroContainer()}
      <ContainerGrid>
        {loading && <LinearProgress />}
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
