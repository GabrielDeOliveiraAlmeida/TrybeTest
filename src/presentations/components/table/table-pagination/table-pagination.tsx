import { FilterContext, TableContext } from '@/main/contexts'
import React, { useContext } from 'react'
import { MyTablePaginationStyled } from './styles'

const MyTablePagination: React.FC = () => {
  const { count, countFiltered, page, setNewPage } = useContext(TableContext)
  const { filter } = useContext(FilterContext)

  const handleChangePage = (newPage: number): void => {
    setNewPage(newPage)
  }

  return (
    <MyTablePaginationStyled
        rowsPerPageOptions={[10]}
        colSpan={3}
        count={filter.filters.filterByName.name.length > 0 ||
          filter.filters.filterByNumericValues.length > 0
          ? countFiltered
          : count}
        rowsPerPage={10}
        page={page}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true
        }}
        onChangePage={(_, newPage) => handleChangePage(newPage)}
        onChangeRowsPerPage={ () => {} }
    />
  )
}

export default MyTablePagination
