import React, { useContext, useState } from 'react'
import { ContainerItem, GridContainer, MyButtonGroup, MyInputLabel, MyTextField } from './styled'
import { MyDropDown } from '..'
import { Typography } from '@material-ui/core'
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
  const { setNumericFilter, columnsFilter, setColumnStatus } = useContext(FilterContext)
  const [value, setValue] = useState<string>('')
  const [columnValue, setColumnValue] = useState<string>('')
  const [logical, setLogical] = useState<FilterData.LogicalOperator>(FilterData.LogicalOperator['maior que'])

  const logicalFilter = ['maior que', 'menor que', 'igual a']

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
    const numericFilter: FilterData.ModelFilterNumber = {
      column: columnValue,
      logicalOperator: logical,
      value: value
    }
    setNumericFilter(numericFilter)
    setValue('')
    setLogical(FilterData.LogicalOperator['maior que'])
    setColumnValue('')
    setColumnStatus(numericFilter)
  }

  return (
    <GridContainer>
      <ContainerItem>
        <Typography variant="h6">Filtrar por</Typography>
      </ContainerItem>
      <ContainerItem>
        <MyInputLabel>Colunas</MyInputLabel>
        <MyDropDown
          onChange={(event) => { handleColumnValue(event) }}
          value={columnValue}
          cellValues={columnsFilter.filter(elem => !elem.disable).map(elem => String(elem.name))}
        />
      </ContainerItem>
      <ContainerItem>
      <MyInputLabel>Tipo</MyInputLabel>
        <MyDropDown
          onChange={(event) => { handleChangeLogical(event) }}
          value={logical}
          cellValues={logicalFilter}
        />
      </ContainerItem>
      <ContainerItem>
        <MyInputLabel>Valor</MyInputLabel>
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
