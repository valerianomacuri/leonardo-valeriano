import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material'
import React from 'react'

export const MySelect = ({ helperText, onChange, value = '', children }) => {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {children}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
