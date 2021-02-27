import { FilterData } from '@/domain/usecases'
import { LoadData } from '@/domain/usecases/load-data/load-data'
import { FilterContext, TableContext } from '@/main/contexts'
import { TableBody } from '@material-ui/core'
import React, { useContext } from 'react'
import MyTableCell from '../table-cell/table-cell'
import { MyTableRow } from './styled'

const MyTableBody: React.FC = () => {
  const { data, invalidColumns, page } = useContext(TableContext)
  const { filter } = useContext(FilterContext)
  const rowsPerPage = 10

  const renderTableRows = (): JSX.Element => {
    console.log({ Filters: filter })
    const name = filter.filters.filterByName.name
    const dataFiltered = data.filter(elem => {
      return name.length > 0 ? elem.name.includes(name) : data
    }).filter((data: LoadData.ModelResults) => {
      return filter.filters.filterByNumericValues.every(valueFilter => {
        const key: keyof LoadData.ModelResults = valueFilter.column as keyof LoadData.ModelResults
        switch (valueFilter.logicalOperator) {
          case FilterData.LogicalOperator['igual a']: {
            return valueFilter.value === data[key]
          }
          case FilterData.LogicalOperator['maior que']: {
            return valueFilter.value > data[key]
          }
          default: {
            return valueFilter.value < data[key]
          }
        }
      })
    })

    return (
      <>
        {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
