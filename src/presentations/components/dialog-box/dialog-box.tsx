import React, { useState } from 'react'
import { GridContainer } from './styled'
import { FilterData } from '@/domain/usecases'
import DialogBoxItem from './dialog-box-item'

const defaultValue: FilterData.ModelFilterNumber = {
  column: '',
  logicalOperator: FilterData.LogicalOperator['maior que'],
  value: ''
}
const DialogBox: React.FC = () => {
  const [filters, setFilters] = useState<FilterData.ModelFilterNumber[]>([defaultValue])

  const saveFilters = (obj: FilterData.ModelFilterNumber): void => {
    setFilters([obj, ...filters])
  }

  return (
    <GridContainer>
        {filters.map((value, index) =>
          (
          <DialogBoxItem
            key={index}
            saveFilters={saveFilters}
          />
          ))}
    </GridContainer>
  )
}

export default DialogBox
