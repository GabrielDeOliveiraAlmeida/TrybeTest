import React, { useContext, useEffect, useState } from 'react'
import {
  MyTable,
  MainContainer,
  MyTableContainer,
  ContainerGrid,
  ContainerFilterMain,
  ContainerFilterItem,
  GridModal,
  ContainerChipsFilter,
  ContainerOrderBy,
  ContainerOrderByChip
} from './styles'
import { MyDropDown, MyTableBody, TableHeader } from '@/presentations/components'
import { FilterContext, TableContext } from '@/main/contexts'
import MyTablePagination from '@/presentations/components/table/table-pagination/table-pagination'
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import { TextField } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList'
import Button from '@material-ui/core/Button/Button'
import DialogFilter from '@/presentations/components/dialog-filter/dialog-filter'
import { FilterData } from '@/domain/usecases'
import MyChips from '@/presentations/components/my-chip/my-chip'
import MyRadioButtons from '@/presentations/components/radio-buttons/radio-buttons'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'
import Grid from '@material-ui/core/Grid/Grid'

const TableMain: React.FC = () => {
  const { getData, loading, setNewPage, invalidColumns, columnsName } = useContext(TableContext)
  const { setNameFilter, filter, removeFilter, setColumnStatus, setOrderBy } = useContext(FilterContext)
  const [showDialog, setShowDialog] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const handleNameFilter = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setNameFilter({
      name: event.target.value
    })
    setNewPage(0)
  }

  const showDialogBoxFilter = (): void => {
    setShowDialog(!showDialog)
  }

  const renderDialogBox = (): JSX.Element => {
    return (
      <GridModal>
        <DialogFilter closeModal={showDialogBoxFilter} />
      </GridModal>
    )
  }

  const deleteFilter = (elem: FilterData.ModelFilterNumber): void => {
    removeFilter(elem)
    setColumnStatus(elem)
  }

  const orderByAscDesc = (value: string, index: number): void => {
    setOrderBy({
      column: filter.filters.order.column,
      sort: value === 'ASC' ? 'ASC' : 'DESC'
    })
  }

  const orderByColumn = (event: React.ChangeEvent<{
    name?: string | undefined
    value: unknown
  }>): void => {
    setOrderBy({
      column: String(event.target.value),
      sort: filter.filters.order.sort
    })
  }

  return (
    <MainContainer container>
      <ContainerFilterMain item>
        <ContainerFilterItem item>
          <Grid>
            <InputLabel>Filtrar pelo Nome</InputLabel>
            <TextField
              variant="standard"
              onChange={(event) => handleNameFilter(event)}
            ></TextField>
          </Grid>
          <ContainerOrderBy>
            <Grid>
              <InputLabel>Ordenar por Coluna</InputLabel>
              <MyDropDown
                onChange={(event) => orderByColumn(event)}
                value={filter.filters.order.column}
                cellValues={columnsName.filter(elem => invalidColumns
                  .some((invalid) => invalid !== elem))}
              />
            </Grid>
            <ContainerOrderByChip>
              <MyRadioButtons
                values={['ASC', 'DESC']}
                onClick={orderByAscDesc}
              />
            </ContainerOrderByChip>
          </ContainerOrderBy>
        </ContainerFilterItem>
        <ContainerFilterItem item>
          <Button
            variant="text"
            startIcon={<FilterListIcon />}
            onClick={() => { showDialogBoxFilter() }}
          >
            Filtros
      </Button>
        </ContainerFilterItem>
      </ContainerFilterMain>
      <ContainerChipsFilter>
        {filter.filters.filterByNumericValues.map((elem, index) => {
          return (
            <MyChips
              key={index}
              onDelete={() => { deleteFilter(elem) }}
              label={`${elem.column} ${elem.logicalOperator} ${elem.value}`}
            />
          )
        })}
      </ContainerChipsFilter>
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
      {showDialog && renderDialogBox()}
    </MainContainer>
  )
}

export default TableMain
