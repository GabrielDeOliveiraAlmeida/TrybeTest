import styled from 'styled-components'
import Grid from '@material-ui/core/Grid/Grid'
import Table from '@material-ui/core/Table/Table'
import TableContainer from '@material-ui/core/TableContainer/TableContainer'

export const MainContainer = styled(Grid)` 
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
`

export const ContainerGrid = styled(Grid)` 
    width: 80%;
    border: 1px solid rgba(0,0,0,0.15);
`

export const MyTableContainer = styled(TableContainer)` 
    height: 400px;
    overflow: auto;
`

export const MyTable = styled(Table)` 
`

export const ContainerMain = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    cursor: default;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background-color: white;
`

export const ContainerFilterMain = styled(Grid)` 
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-between;
`
export const GridModal = styled(Grid)` 
    right: 0;
    position: absolute;
    transform: translate(-24px, 50px);

    
`

export const ContainerChipsFilter = styled(Grid)` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    padding-bottom: 8px;
`

export const ContainerFilterItem = styled(Grid)` 
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 24px;
    padding-top: 24px;
`
export const ContainerOrderBy = styled(Grid)` 
    display: flex;
    flex-direction: row;
    padding: 0 24px;
    justify-content: center;
`
export const ContainerOrderByChip = styled(Grid)` 
    display: flex;
    flex-direction: row;
    padding-left: 24px;
    align-items: center;
`
