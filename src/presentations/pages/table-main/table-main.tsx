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
  ContainerEachChip
} from './styles'
import { MyTableBody, TableHeader } from '@/presentations/components'
import { FilterContext, TableContext } from '@/main/contexts'
import MyTablePagination from '@/presentations/components/table/table-pagination/table-pagination'
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import { Chip, TextField } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList'
import Button from '@material-ui/core/Button/Button'
import DialogFilter from '@/presentations/components/dialog-filter/dialog-filter'
import { FilterData } from '@/domain/usecases'

const TableMain: React.FC = () => {
  const { getData, loading, setNewPage } = useContext(TableContext)
  const { setNameFilter, filter, removeFilter } = useContext(FilterContext)
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
  }

  return (
    <MainContainer container>
      <ContainerFilterMain item>
        <ContainerFilterItem item>
          <TextField
            variant="standard"
            label={'Filtrar pelo Nome'}
            onChange={(event) => handleNameFilter(event)}
          ></TextField>
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
            <ContainerEachChip key={index}>
              <Chip
                onDelete={() => { deleteFilter(elem) }}
                label={`${elem.column} ${elem.logicalOperator} ${elem.value}`}
              />
            </ContainerEachChip>
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
