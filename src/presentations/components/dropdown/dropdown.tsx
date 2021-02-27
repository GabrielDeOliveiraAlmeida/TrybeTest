import React from 'react'
import { MenuItem } from '@material-ui/core'
import { MyLinkUrl } from '..'
import { validatorUrl } from '@/utils/validators'
import Typography from '@material-ui/core/Typography/Typography'
import { formatValue } from '@/utils/formatter'
import { MySelect } from './styled'

export type MyDropDownProps = {
  cellValues: string[]
}

const MyDropDown: React.FC<MyDropDownProps> = ({ cellValues }: MyDropDownProps) => {
  const handleValue = (value: string): JSX.Element => {
    if (validatorUrl(value)) {
      return (
        <MyLinkUrl url={value} />
      )
    } else {
      return (
        <Typography noWrap>{formatValue(value)}</Typography>
      )
    }
  }

  return (
  <MySelect
    value={cellValues[0]}
    onChange={() => { }}
  >
    {cellValues.map((value, index) => {
      return (
        <MenuItem key={index} value={value}>
          {handleValue(value)}
        </MenuItem>
      )
    })}
  </MySelect>
  )
}

export default MyDropDown
