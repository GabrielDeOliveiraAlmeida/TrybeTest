import { TextField } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton/IconButton'
import React, { useContext } from 'react'
import { MyDropDown } from '..'
import { FilterContainer, GridContainer } from './styled'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'
import { TableContext } from '@/main/contexts'
const DialogBox: React.FC = () => {
  const { columnsName } = useContext(TableContext)

  const filterContainer = (): JSX.Element => {
    return (
        <FilterContainer item>
            <MyDropDown
                cellValues={columnsName}
            ></MyDropDown>
            <MyDropDown
                cellValues={['maior que', 'menor que', 'igual a']}
            ></MyDropDown>
            <TextField
                variant="standard"
                label={'Filtrar pelo Nome'}
            ></TextField>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <DoneIcon />
            </IconButton>
        </FilterContainer>
    )
  }

  return (
        <GridContainer>
            {filterContainer()}
        </GridContainer>
  )
}

export default DialogBox
