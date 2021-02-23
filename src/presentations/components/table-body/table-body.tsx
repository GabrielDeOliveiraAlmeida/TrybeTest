import { TableRow, TableCell, TableBody } from '@material-ui/core'
import React from 'react'

const MyTableBody: React.FC = () => {
  return (
    <TableBody>
    <TableRow
      hover
      tabIndex={-1}
      onClick={() => { console.log('Clkci') }}
    >
      <TableCell align={'left'}>
        TesteCell
      </TableCell>
      <TableCell align={'left'}>
        TesteCell
      </TableCell>
      <TableCell align={'left'}>
        TesteCell
      </TableCell>
    </TableRow>
  </TableBody>
  )
}

export default MyTableBody
