import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import React from 'react'
import { HeaderContainer } from './styled'

const MyHeaderPage: React.FC = () => {
  return (
    <Grid container>
      <HeaderContainer item>
        <Typography variant={'h4'}>Star Wars</Typography></HeaderContainer>
    </Grid>
  )
}

export default MyHeaderPage
