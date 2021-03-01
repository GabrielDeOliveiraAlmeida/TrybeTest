import React from 'react'
import Chip, { ChipProps } from '@material-ui/core/Chip/Chip'
import { ContainerEachChip } from './styled'

type MyChipsProps = ChipProps

const MyChips: React.FC<MyChipsProps> = (props: MyChipsProps) => {
  return (
      <ContainerEachChip>
          <Chip {...props}/>
      </ContainerEachChip>
  )
}

export default MyChips
