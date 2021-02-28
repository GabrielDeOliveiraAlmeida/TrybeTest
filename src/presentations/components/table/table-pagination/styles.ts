import styled from 'styled-components'
import { TablePagination } from '@material-ui/core'

export const MyTablePaginationStyled = styled(TablePagination)` 
    &.MuiTablePagination-root{
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    width: 100%;
    }
`
