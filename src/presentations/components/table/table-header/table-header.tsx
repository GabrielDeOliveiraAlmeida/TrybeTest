import { TableContext } from '@/main/contexts'
import { TableHead, TableRow, TableCell } from '@material-ui/core'
import React, { useContext } from 'react'

const TableHeader: React.FC = () => {
  const { columnsName, invalidColumns } = useContext(TableContext)
  return (
    <TableHead>
      <TableRow>
        {columnsName.map((columns, index) => {
          if (!invalidColumns.some(elem => elem !== columns)) return <></>
          return (
          <TableCell
            key={index}
            align={'left'}
            variant={'head'}
            style={{
              fontWeight: 'bold',
              maxWidth: 140
            }}
          >
            {columns}
          </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
