import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
interface IProps {
  logo: any
  user: {
    avatar: string
    name: string
    description: string
  }
}
function Header(props: IProps) {
  const { logo, user } = props

  return (
    <Grid
      container
      xs={12}
      justifyContent='space-around'
      alignItems='center'
      style={{ backgroundColor: 'white', maxHeight: '100px' }}
    >
      <Grid item xs={2} style={{ alignContent: 'flex-end' }}>
        <Box>
          <img width={50} height={50} src={logo} />
        </Box>
      </Grid>
      <Grid item xs={2} style={{ alignContent: 'flex-start' }} display='flex'>
        <Stack flexDirection='column' alignItems='flex-end' margin={1}>
          <Typography fontSize={10} color='black' fontStyle='italic'>
            {user.description}
          </Typography>
          <Typography fontSize={10} color='black'>
            {user.name}
          </Typography>
        </Stack>
        <Avatar src={user.avatar}></Avatar>
      </Grid>
    </Grid>
  )
}

export default Header
