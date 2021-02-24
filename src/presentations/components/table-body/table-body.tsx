import { TableContext } from '@/main/contexts'
import { TableRow, TableCell, TableBody } from '@material-ui/core'
import React, { useContext } from 'react'

const MyTableBody: React.FC = () => {
  const { data } = useContext(TableContext)

  const handleNumbers = (value: string): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const formatValue = (value: number): string => {
    if (Math.abs(value) >= 1000000000000) { return `${handleNumbers((value / 1000000000000).toFixed(2))} Tri` }
    if (Math.abs(value) >= 1000000000) { return `${handleNumbers((value / 1000000000).toFixed(2))} Bi` }
    if (Math.abs(value) >= 1000000) { return `${handleNumbers((value / 1000000).toFixed(2))} Mi` }
    if (Math.abs(value) >= 1000) { return `${((value / 1000).toFixed(2))} Mil` }
    if (Number.isInteger(value)) { return String(value) }
    if (typeof (value) === 'number') return value.toFixed(2)
    return String(value)
  }

  return (
    <TableBody>
      {data.map((tableRow, index) => {
        return (
          <TableRow
            key={index}
            hover
            tabIndex={-1}
            onClick={() => { console.log('Clkci') }}
          >
            <TableCell align={'left'}>
              {tableRow.name}
            </TableCell>
            <TableCell align={'left'}>
              {formatValue(tableRow.rotation_period)}
            </TableCell>
            <TableCell align={'left'}>
              {formatValue(tableRow.orbital_period)}
            </TableCell>
            <TableCell align={'left'}>
              {formatValue(tableRow.diameter)}
            </TableCell>
            <TableCell align={'left'}>
              {tableRow.gravity}
            </TableCell>
            <TableCell align={'left'}>
              {tableRow.terrain}
            </TableCell>
            <TableCell align={'left'}>
              {formatValue(tableRow.population)}
            </TableCell>
            <TableCell align={'left'}>
              {tableRow.created}
            </TableCell>
            <TableCell align={'left'}>
              {tableRow.edited}
            </TableCell>
            <TableCell align={'left'}>
              {tableRow.url}
            </TableCell>
            <TableCell align={'left'}>
              {tableRow.films.toString()}
            </TableCell>
          </TableRow>
        )
      })}

    </TableBody>
  )
}

export default MyTableBody
