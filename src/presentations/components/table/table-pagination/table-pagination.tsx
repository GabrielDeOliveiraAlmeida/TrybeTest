import { TableContext } from '@/main/contexts'
import React, { useContext } from 'react'
import { MyTablePaginationStyled } from './styles'

const MyTablePagination: React.FC = () => {
  const { count, page, setNewPage } = useContext(TableContext)

  const handleChangePage = (newPage: number): void => {
    // loadData({
    //   page: newPage
    // })
    setNewPage(newPage)
  }

  return (
    <MyTablePaginationStyled
        rowsPerPageOptions={[10]}
        colSpan={3}
        count={count}
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
