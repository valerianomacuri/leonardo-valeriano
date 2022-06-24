import { Typography, Button } from '@mui/material'
import { Fragment } from 'react'

const pages = ['Products', 'Pricing', 'Blog']

export const Navbar = () => {
  return (
    <Fragment>
      {pages.map((page) => (
        <Button key={page} variant='text'>
          <Typography component='span' color='white'>
            {page}
          </Typography>
        </Button>
      ))}
    </Fragment>
  )
}
