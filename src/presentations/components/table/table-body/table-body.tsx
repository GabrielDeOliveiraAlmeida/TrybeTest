import { LoadData } from '@/domain/usecases/load-data/load-data'
import { TableContext } from '@/main/contexts'
import { TableBody } from '@material-ui/core'
import React, { useContext } from 'react'
import MyTableCell from '../table-cell/table-cell'
import { MyTableRow } from './styled'

const MyTableBody: React.FC = () => {
  const { data, invalidColumns, page } = useContext(TableContext)
  const rowsPerPage = 10

  return (
    <TableBody>
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((tableRow: LoadData.ModelResults, index) => {
          return (
            <MyTableRow
              key={index}
              hover
              tabIndex={-1}
              onClick={() => { console.log('Clkci') }}
            >
              {Object.keys(tableRow)
                .map((row: string, index: number) => {
                  const key: keyof LoadData.ModelResults = row as keyof LoadData.ModelResults
                  if (invalidColumns.some(elem => elem === row)) return (<></>)
                  return (
                    <MyTableCell key={index} value={tableRow[key]} />
                  )
                })}
              {/* <MyTableCell>
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
              <MyLinkUrl url={tableRow.url} />
            </MyTableCell>
            <MyTableCell>
              <MyDropDown cellValues={tableRow.films} />
            </MyTableCell> */}
            </MyTableRow>
          )
        })}

    </TableBody>
  )
}

export default MyTableBody
