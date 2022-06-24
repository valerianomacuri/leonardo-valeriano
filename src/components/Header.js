import { AppBar, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar position='static' sx={{ paddingX: 2, paddingY: 1 }}>
      <Typography fontWeight='bold' variant='h4'>
        Chicho ReactJS
      </Typography>
    </AppBar>
  )
}

export default Header
