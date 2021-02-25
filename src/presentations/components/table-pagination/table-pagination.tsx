import React from 'react'
import { MyTablePaginationStyled } from './styles'

const MyTablePagination: React.FC = () => {
  return (
    <MyTablePaginationStyled
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={3}
        count={10}
        rowsPerPage={10}
        page={1}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true
        }}
        onChangePage={ () => {} }
        onChangeRowsPerPage={ () => {} }
    />
  )
}

export default MyTablePagination
