import IconButton from '@material-ui/core/IconButton/IconButton'
import React, { useContext, useState } from 'react'
import { MyDropDown } from '..'
import { FilterContainer, MyTextField } from './styled'
import DoneIcon from '@material-ui/icons/Done'
import { TableContext } from '@/main/contexts'
import { formatOnlyNumbers } from '@/utils/formatter'
import { FilterData } from '@/domain/usecases'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

type DialogBoxItemProps = {
  saveFilters: (newObj: FilterData.ModelFilterNumber) => void
}

const DialogBoxItem: React.FC<DialogBoxItemProps> = ({ saveFilters }: DialogBoxItemProps) => {
  const { columnsName } = useContext(TableContext)
  const [editionMode, setEditionMode] = useState<boolean>(true)
  const [value, setValue] = useState<string>('')
  const [columnValue, setColumnValue] = useState<string>('')
  const [logical, setLogical] = useState<FilterData.LogicalOperator>(FilterData.LogicalOperator['maior que'])

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
    saveFilters({
      column: columnValue,
      logicalOperator: logical,
      value: value
    })
    setEditionMode(false)
  }

  const filterButtons = (): JSX.Element => {
    if (editionMode) {
      return (
                <IconButton
                    aria-label='done'
                    onClick={() => saveFilter()}
                >
                    <DoneIcon />
                </IconButton>
      )
    } else {
      return (
                <>
                    <IconButton
                        aria-label='edit'
                        onClick={() => {}}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label='done'
                        onClick={() => saveFilter()}
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
      )
    }
  }
  const filterContainer = (): JSX.Element => {
    return (
            <FilterContainer>
                <MyDropDown
                    onChange={(event) => handleColumnValue(event)}
                    value={columnValue}
                    cellValues={columnsName}
                    disabled={!editionMode}
                ></MyDropDown>
                <MyDropDown
                    value={logical}
                    onChange={(event) => handleChangeLogical(event)}
                    cellValues={['maior que', 'igual a', 'menor que']}
                    disabled={!editionMode}
                ></MyDropDown>
                <MyTextField
                    value={value}
                    variant="standard"
                    label={'Valor'}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                      handleTextField(event)
                    }}
                    disabled={!editionMode}
                ></MyTextField>
                {filterButtons()}
            </FilterContainer>

    )
  }

  return (
        <>
            {filterContainer()}
        </>
  )
}

export default DialogBoxItem
