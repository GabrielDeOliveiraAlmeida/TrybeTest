import React, { useContext, useState } from 'react'
import { ContainerItem, GridContainer, MyButtonGroup, MyInputLabel, MyTextField } from './styled'
import { MyDropDown } from '..'
import { Typography } from '@material-ui/core'
import { FilterContext, TableContext } from '@/main/contexts'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { FilterData } from '@/domain/usecases'
import { formatOnlyNumbers } from '@/utils/formatter'
import DoneIcon from '@material-ui/icons/Done'
import MyRadioButtons from '../radio-buttons/radio-buttons'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'

type DialogFilterProps = {
  closeModal: () => void
}

const DialogFilter: React.FC<DialogFilterProps> = ({ closeModal }: DialogFilterProps) => {
  const { setNumericFilter, columnsFilter, setColumnStatus } = useContext(FilterContext)
  const { setNewPage, page } = useContext(TableContext)
  const [value, setValue] = useState<string>('')
  const [columnValue, setColumnValue] = useState<string>('')
  const [logical, setLogical] = useState<string>(FilterData.LogicalOperator[0])

  const [valueError, setValueError] = useState<boolean>(false)
  const [columnValueError, setColumnValueError] = useState<boolean>(false)
  const [logicalError, setLogicalError] = useState<boolean>(false)

  const logicalFilter = ['maior que', 'menor que', 'igual a']

  const handleColumnValue = (event: React.ChangeEvent<{
    name?: string | undefined
    value: unknown
  }>): void => {
    setColumnValue(String(event.target.value))
  }

  const handleColumn = (value: string, index: number): void => {
    setLogical(value)
  }

  /**
   * @deprecated
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeLogical = (event: React.ChangeEvent<{
    name?: string | undefined
    value: unknown
  }>): void => {
    setLogical(String(event.target.value))
  }

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement |
  HTMLTextAreaElement>
  ): void => {
    setValue(formatOnlyNumbers(event.target.value))
  }

  const saveFilter = (): void => {
    let error = false
    if (columnValue.length === 0) {
      setColumnValueError(true)
      error = true
    }
    if (logicalFilter.length === 0) {
      setLogicalError(true)
      error = true
    }
    if (value.length === 0) {
      setValueError(true)
      error = true
    }
    if (error) return

    const key = logical as unknown as FilterData.LogicalOperator

    const numericFilter: FilterData.ModelFilterNumber = {
      column: columnValue,
      logicalOperator: key,
      value: value
    }
    setNumericFilter(numericFilter)
    setColumnStatus(numericFilter)
    setDefaultValues()
    if (page !== 0) setNewPage(0)
  }

  const setDefaultValues = (): void => {
    setValue('')
    setColumnValue('')
    if (valueError) setValueError(false)
    if (columnValueError) setLogicalError(false)
    if (logicalError) setColumnValueError(false)
  }

  return (
    <GridContainer>
      <ContainerItem>
        <Typography variant="h6">Filtrar por</Typography>
      </ContainerItem>
      <ContainerItem>
        <MyInputLabel><InputLabel>Colunas</InputLabel></MyInputLabel>
        <MyDropDown
          error={columnValueError}
          onChange={(event) => { handleColumnValue(event) }}
          value={columnValue}
          cellValues={columnsFilter.filter(elem => !elem.disable).map(elem => String(elem.name))}
        />
      </ContainerItem>
      <ContainerItem>
      <MyInputLabel><InputLabel>Tipo</InputLabel></MyInputLabel>
        <MyRadioButtons
          values={logicalFilter}
          onClick={handleColumn}
        />
        {/* <MyDropDown
          error={logicalError}
          onChange={(event) => { handleChangeLogical(event) }}
          value={logical}
          cellValues={logicalFilter}
        /> */}
      </ContainerItem>
      <ContainerItem>
        <MyInputLabel><InputLabel>Valor</InputLabel></MyInputLabel>
        <MyTextField
          error={valueError}
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
