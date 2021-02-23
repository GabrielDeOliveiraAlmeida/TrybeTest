import { TableHead, TableRow, TableCell } from '@material-ui/core'
import React from 'react'

const TableHeader: React.FC = () => {
  return (
        <TableHead>
            <TableRow>
                <TableCell
                    align={'left'}
                    variant={'head'}
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: 'white'
                    }}
                >
                    {'Teste'}
                </TableCell>
                <TableCell
                    align={'left'}
                    variant={'head'}
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: 'white'
                    }}
                >
                    {'Teste'}
                </TableCell>
                <TableCell
                    align={'left'}
                    variant={'head'}
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: 'white'
                    }}
                >
                    {'Teste'}
                </TableCell>
            </TableRow>
        </TableHead>
  )
}

export default TableHeader
