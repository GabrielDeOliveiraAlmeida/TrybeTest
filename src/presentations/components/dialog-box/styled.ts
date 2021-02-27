import Grid from '@material-ui/core/Grid/Grid'
import styled from 'styled-components'

export const GridContainer = styled(Grid)` 
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    height: 250px;
    max-width: 650px;
    overflow: auto;
`

export const FilterContainer = styled(Grid)` 
    display: flex;
    flex-direction: row;
    padding: 24px;
    justify-content: space-between;
`

export const DropDownContainer = styled(Grid)` 
    max-width: 100px
`
