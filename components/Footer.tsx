import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Grid
      container
      minHeight={320}
      alignItems='center'
      justifyContent='center'
      style={{ backgroundColor: 'white' }}
    >
      <Grid item xs={8}>
        <Typography color='black'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eaque
          laboriosam, esse tenetur veniam enim beatae odit reiciendis assumenda
          pariatur dolor animi id! Libero, deserunt officiis? Saepe assumenda
          architecto unde. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Odio eaque laboriosam, esse tenetur veniam enim beatae odit
          reiciendis assumenda pariatur dolor animi id! Libero, deserunt
          officiis? Saepe assumenda architecto unde.
        </Typography>
        <Typography variant='h6' fontSize={15} color='black' align='center'>
          Copyright 2021 TLS
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
