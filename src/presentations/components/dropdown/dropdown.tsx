import React from 'react'
import { MenuItem, SelectProps } from '@material-ui/core'
import { MyLinkUrl } from '..'
import { validatorUrl } from '@/utils/validators'
import Typography from '@material-ui/core/Typography/Typography'
import { formatValue } from '@/utils/formatter'
import { MySelect } from './styled'

export interface MyDrop extends SelectProps {
  cellValues: string[]
}

export type MyDropDownProps = {
  cellValues: string[]
  onChange?: (event: React.ChangeEvent<{
    name?: string | undefined
    value: unknown
  }>) => void
}

const MyDropDown: React.FC<MyDrop> = (props: MyDrop) => {
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
    {...props}
  >
    {props.cellValues.map((value, index) => {
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
