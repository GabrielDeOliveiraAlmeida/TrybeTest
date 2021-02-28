import React from 'react'
import { TableCell, Typography } from '@material-ui/core'
import { formatValue } from '@/utils/formatter'
import { MyDropDown, MyLinkUrl } from '../../'
import { validatorUrl } from '@/utils/validators'

export type MyTableCellValue = number | string | string[] | Date
export type MyTableCellProps = {
  // children: React.ReactNode
  value: MyTableCellValue
}

const MyTableCell: React.FC<MyTableCellProps> = (props: MyTableCellProps) => {
  const { value } = props

  const handleValue = (value: MyTableCellValue): JSX.Element => {
    if (typeof (value) !== 'object') {
      if (validatorUrl(value.toString())) {
        return (
          <MyLinkUrl url={value.toString()} />
        )
      } else {
        return (
          <Typography noWrap>{formatValue(value)}</Typography>
        )
      }
    }
    if (Array.isArray(value)) {
      return (
        <MyDropDown value={value[0]} cellValues={value}></MyDropDown>
      )
    }
    return (
      <></>
    )
  }
  return (
    <TableCell align={'left'}>
      {handleValue(value)}
    </TableCell>
  )
}

export default MyTableCell
