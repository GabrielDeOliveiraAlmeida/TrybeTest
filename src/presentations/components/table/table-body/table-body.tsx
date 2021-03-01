import { LoadData } from '@/domain/usecases/load-data/load-data'
import { FilterContext, TableContext } from '@/main/contexts'
import { TableBody } from '@material-ui/core'
import React, { useContext } from 'react'
import MyTableCell from '../table-cell/table-cell'
import { MyTableRow } from './styled'

const MyTableBody: React.FC = () => {
  const { data, invalidColumns, page, setCountValue } = useContext(TableContext)
  const { filter } = useContext(FilterContext)
  const rowsPerPage = 10

  const comparator = (a: string, b: string): number => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }
  const dataSort = (data: LoadData.ModelResults[]): LoadData.ModelResults[] => {
    return data.sort((a, b) => {
      const key: keyof LoadData.ModelResults = filter.filters.order.column as keyof LoadData.ModelResults
      return filter.filters.order.sort === 'ASC'
        ? comparator(a[key].toString(), b[key].toString())
        : -comparator(a[key].toString(), b[key].toString())
    })
  }

  const renderTableRows = (): JSX.Element => {
    const name = filter.filters.filterByName.name
    let dataFiltered: LoadData.ModelResults[] = data
    if (name.length > 0) {
      dataFiltered = data.filter(elem => {
        return elem.name.includes(name)
      })
    }
    if (filter.filters.filterByNumericValues.length > 0) {
      dataFiltered = dataFiltered.filter((data: LoadData.ModelResults) => {
        return filter.filters.filterByNumericValues.every(valueFilter => {
          const key: keyof LoadData.ModelResults = valueFilter.column as keyof LoadData.ModelResults
          const value = data[key].valueOf()
          if (valueFilter.logicalOperator.toString() === 'igual a') {
            return valueFilter.value === value
          } else if (valueFilter.logicalOperator.toString() === 'maior que') {
            return valueFilter.value < value
          } else if (valueFilter.logicalOperator.toString() === 'menor que') {
            return valueFilter.value > value
          } else {
            return false
          }
        })
      })
    }
    if (filter.filters.filterByName.name.length > 0 ||
      filter.filters.filterByNumericValues.length > 0) { setCountValue(dataFiltered.length) }
    return (
      <>
        {dataSort(dataFiltered)
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((tableRow: LoadData.ModelResults, index) => {
            return (
              <MyTableRow
                key={index}
                hover
                tabIndex={-1}
              >
                {Object.keys(tableRow)
                  .map((row: string, index: number) => {
                    const key: keyof LoadData.ModelResults = row as keyof LoadData.ModelResults
                    if (invalidColumns.some(elem => elem === row)) return (<></>)
                    return (
                      <MyTableCell key={index} value={tableRow[key]} />
                    )
                  })}
              </MyTableRow>
            )
          })}
      </>
    )
  }

  return (
    <TableBody>
      {renderTableRows()}
    </TableBody>
  )
}

export default MyTableBody
