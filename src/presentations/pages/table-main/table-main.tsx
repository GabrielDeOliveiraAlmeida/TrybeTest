import React from 'react'
import { Grid, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { MyTableContainer, MyTable } from './styled'

const TableMain: React.FC = () => {
  return (
    <Grid container>
      <MyTableContainer>
          <MyTable stickyHeader>
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
            <TableBody>
              <TableRow
                hover
                tabIndex={-1}
                onClick={() => { console.log('Clkci') }}
              >
                <TableCell align={'left'}>
                  TesteCell
                </TableCell>
                <TableCell align={'left'}>
                  TesteCell
                </TableCell>
                <TableCell align={'left'}>
                  TesteCell
                </TableCell>
              </TableRow>
            </TableBody>
          </MyTable>
      </MyTableContainer>
    </Grid>
  )
}

export default TableMain
