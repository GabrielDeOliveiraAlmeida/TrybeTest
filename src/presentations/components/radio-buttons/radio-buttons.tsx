import React, { useState } from 'react'
import MyChips from '../my-chip/my-chip'
import { ContainerChips } from './styled'

type MyRadioButtonsProps = {
  values: string[]
  onClick: (value: string, index: number) => void
}

const MyRadioButtons: React.FC<MyRadioButtonsProps> = ({ values, onClick }: MyRadioButtonsProps) => {
  const [value, setValue] = useState<number>(0)

  const changeButton = (value: string, index: number): void => {
    setValue(index)
    onClick(value, index)
  }

  return (
        <ContainerChips>
            {values.map((eachValue, index) => (
                <MyChips
                    key={index}
                    label={eachValue}
                    variant={value === index ? 'default' : 'outlined'}
                    onClick={() => changeButton(eachValue, index)}
                />
            ))}

        </ContainerChips>

  )
}

export default MyRadioButtons
