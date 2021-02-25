import React from 'react'
import { TableCell } from '@material-ui/core'

export type MyTableCellProps = {
  children: React.ReactNode
}

const MyTableCell: React.FC<MyTableCellProps> = (props: MyTableCellProps) => {
  const { children } = props
  return (
    <TableCell align={'left'}>
         {children}
    </TableCell>
  )
}

export default MyTableCell
