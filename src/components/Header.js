import { AppBar, Typography } from '@mui/material'
import { Navbar } from './Navbar'

const Header = () => {
  return (
    <AppBar
      position='static'
      sx={{ paddingX: 2, paddingY: 1 }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
      }}
    >
      <Typography fontWeight='bold' variant='h4'>
        Chicho ReactJS
      </Typography>
      <Navbar />
    </AppBar>
  )
}

export default Header
