import React, { useContext, useState } from 'react'
import { ContainerItem, GridContainer, MyButtonGroup, MyTextField } from './styled'
import { MyDropDown } from '..'
import { InputLabel, Typography } from '@material-ui/core'
import { FilterContext } from '@/main/contexts'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { FilterData } from '@/domain/usecases'
import { formatOnlyNumbers } from '@/utils/formatter'
import DoneIcon from '@material-ui/icons/Done'

type DialogFilterProps = {
  closeModal: () => void
}

const DialogFilter: React.FC<DialogFilterProps> = ({ closeModal }: DialogFilterProps) => {
  const { setNumericFilter } = useContext(FilterContext)
  const [value, setValue] = useState<string>('')
  const [columnValue, setColumnValue] = useState<string>('')
  const [logical, setLogical] = useState<FilterData.LogicalOperator>(FilterData.LogicalOperator['maior que'])

  const logicalFilter = ['maior que', 'menor que', 'igual a']
  const columnsFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'
  ]

  const handleColumnValue = (event: React.ChangeEvent<{
    name?: string | undefined
    value: unknown
  }>): void => {
    setColumnValue(String(event.target.value))
  }

  const handleChangeLogical = (event: React.ChangeEvent<{
    name?: string | undefined
    value: unknown
  }>): void => {
    setLogical(event.target.value as FilterData.LogicalOperator)
  }

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement |
  HTMLTextAreaElement>
  ): void => {
    setValue(formatOnlyNumbers(event.target.value))
  }

  const saveFilter = (): void => {
    setNumericFilter({
      column: columnValue,
      logicalOperator: logical,
      value: value
    })
  }

  return (
    <GridContainer>
      <ContainerItem>
        <Typography variant="h6">Filtrar por</Typography>
      </ContainerItem>
      <ContainerItem>
        <InputLabel>Colunas</InputLabel>
        <MyDropDown
          onChange={(event) => { handleColumnValue(event) }}
          value={columnValue}
          cellValues={columnsFilter}
        />
      </ContainerItem>
      <ContainerItem>
      <InputLabel>Tipo</InputLabel>
        <MyDropDown
          onChange={(event) => { handleChangeLogical(event) }}
          value={logical}
          cellValues={logicalFilter}
        />
      </ContainerItem>
      <ContainerItem>
        <InputLabel>Valor</InputLabel>
        <MyTextField
          value={value}
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleTextField(event)
          }}
        ></MyTextField>
      </ContainerItem>
      <MyButtonGroup>
        <IconButton
          aria-label='close'
          onClick={closeModal}
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          aria-label='done'
          onClick={() => { saveFilter() }}
        >
          <DoneIcon />
        </IconButton>
      </MyButtonGroup>
    </GridContainer>
  )
}

export default DialogFilter
