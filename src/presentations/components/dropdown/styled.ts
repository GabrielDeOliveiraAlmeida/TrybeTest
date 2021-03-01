import Select from '@material-ui/core/Select/Select'
import styled from 'styled-components'

export const MySelect = styled(Select)` 
    @media (max-width: 800px){
        width: 100%;
    }
    .MuiSelect-root{
        min-width: 100px
    }
`
