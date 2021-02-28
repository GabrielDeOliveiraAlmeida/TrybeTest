import Typography from '@material-ui/core/Typography/Typography'
import React from 'react'
import { GridContainer, HeaderContainer } from './styled'

const MyHeaderPage: React.FC = () => {
  return (
    <GridContainer container>
      <HeaderContainer item>
        <Typography variant={'h4'}>Star Wars Planets</Typography></HeaderContainer>
    </GridContainer>
  )
}

export default MyHeaderPage
