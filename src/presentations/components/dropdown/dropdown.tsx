import React from 'react'
import { MenuItem, Select } from '@material-ui/core'
import { MyLinkUrl } from '..'

export type MyDropDownProps = {
  cellValues: string[]
}

const MyDropDown: React.FC<MyDropDownProps> = ({ cellValues }: MyDropDownProps) => {
  return (
        <Select
          value={cellValues[0]}
          onChange={() => {}}
        >
            {cellValues.map((value, index) => {
              return (
                <MenuItem key={index} value={value}>
                  <MyLinkUrl url={value} />
                </MenuItem>
              )
            })}
        </Select>
  )
}

export default MyDropDown
