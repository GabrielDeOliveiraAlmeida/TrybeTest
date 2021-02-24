import { TableContext } from '@/main/contexts'
import { TableRow, TableCell, TableBody } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'

const MyTableBody: React.FC = () => {
  const { loadData } = useContext(TableContext)

  useEffect(() => {
    loadData({
      page: 1
    })
  }, [])

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
