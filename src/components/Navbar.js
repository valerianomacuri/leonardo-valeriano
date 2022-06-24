import { Typography, Button } from '@mui/material'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const pages = [
  {
    path: 'first',
    name: 'FirstChallenge'
  },
  {
    path: 'second',
    name: 'SecondChallenge'
  },
  {
    path: 'third',
    name: 'ThirdChallenge'
  },
  {
    path: 'fourth',
    name: 'FourthChallenge'
  }
]

export const Navbar = () => {
  return (
    <Fragment>
      {pages.map((page) => (
        <Link key={page.path} to={page.path}>
          <Button variant='text'>
            <Typography component='span' color='white'>
              {page.name}
            </Typography>
          </Button>
        </Link>
      ))}
    </Fragment>
  )
}
