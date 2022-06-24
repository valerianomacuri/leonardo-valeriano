import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const BasicTable = ({ children }) => {
  return (
    <div
      style={{
        width: '1000px'
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Avatar</TableCell>
              <TableCell align='right'>Nombre</TableCell>
              <TableCell align='right'>Apellidos</TableCell>
              <TableCell align='right'>Edad</TableCell>
              <TableCell align='right'>Borrar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
