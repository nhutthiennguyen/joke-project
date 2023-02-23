import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

interface IProps {
  title: string
  description: string
}
function Hero(props: IProps) {
  const { title, description } = props
  return (
    <Grid
      container
      xs={12}
      style={{ backgroundColor: 'green', minHeight: '300px' }}
      alignItems='center'
    >
      <Grid item xs={12} minHeight={50}>
        <Stack>
          <Typography variant='h4' align='center' mb={5}>
            {title}
          </Typography>
          <Typography variant='h6' align='center'>
            {description}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Hero
