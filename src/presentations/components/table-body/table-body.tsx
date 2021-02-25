import { formatValue } from '@/formatter'
import { TableContext } from '@/main/contexts'
import { TableBody, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { MyDropDown, MyLinkUrl } from '..'
import MyTableCell from '../table-cell/table-cell'
import { MyTableRow } from './styled'

const MyTableBody: React.FC = () => {
  const { data } = useContext(TableContext)
  return (
    <TableBody>
      {data.map((tableRow, index) => {
        return (
          <MyTableRow
            key={index}
            hover
            tabIndex={-1}
            onClick={() => { console.log('Clkci') }}
          >
            <MyTableCell>
              <Typography noWrap>{tableRow.name}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{formatValue(tableRow.rotation_period)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{formatValue(tableRow.orbital_period)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{formatValue(tableRow.diameter)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{formatValue(tableRow.diameter)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{tableRow.gravity}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{(tableRow.terrain)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{(tableRow.population)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{(tableRow.created)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <Typography noWrap>{(tableRow.edited)}</Typography>
            </MyTableCell>
            <MyTableCell>
              <MyLinkUrl url={tableRow.url}/>
            </MyTableCell>
            <MyTableCell>
              <MyDropDown cellValues={tableRow.films} />
            </MyTableCell>
          </MyTableRow>
        )
      })}

    </TableBody>
  )
}

export default MyTableBody
