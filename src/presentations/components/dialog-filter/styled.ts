import Grid from '@material-ui/core/Grid/Grid'
import TextField from '@material-ui/core/TextField/TextField'
import styled from 'styled-components'

export const GridContainer = styled(Grid)` 
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    max-width: 304px;
    
    padding: 24px;
`

export const ContainerItem = styled(Grid)` 
    display: flex;
    flex-direction:column;
    padding-bottom: 8px;
`

export const MyTextField = styled(TextField)` 
`

export const MyButtonGroup = styled(Grid)` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MyInputLabel = styled(Grid)` 
    display: flex;
    padding: 4px 0px;
    
`
