import {
  TableCell,
  TableRow,
  Typography,
  TextField,
  MenuItem,
  IconButton
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { BasicTable } from '../components/BasicTable'
import { MySelect } from '../components/MySelect'
import { USERS } from '../utils'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../redux/reducer'

export const SecondChallengeRedux = () => {
  const users = useSelector((state) => state.users)
  const filteredUsers = useSelector((state) => state.filteredUsers)
  const [orderBy, setOrderBy] = useState('mayor')
  const [filter, setFilter] = useState('nombre')
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const onSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const onDelete = (id) => () => {
    dispatch({
      type: types.DELETE,
      payload: id
    })
  }

  const onChangeOrder = (e) => {
    setOrderBy(e.target.value)
  }

  const onChangeFilter = (e) => {
    setFilter(e.target.value)
  }
  useEffect(() => {
    if (users.length === 0) return
    dispatch({
      type: types.ORDER_BY,
      payload: orderBy
    })
  }, [orderBy])
  useEffect(() => {
    if (users.length === 0) return
    dispatch({
      type: types.FILTER,
      payload: {
        filter,
        searchValue
      }
    })
  }, [searchValue, filter, users])

  return (
    <Fragment>
      <Typography component='h2' variant='body1'>
        SecondChallengeWithRedux
      </Typography>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          display: 'flex',
          gap: 10
        }}
      >
        <TextField
          id='outlined-basic'
          label='Buscar'
          variant='outlined'
          value={searchValue}
          onChange={onSearch}
        />
        <MySelect
          value={filter}
          onChange={onChangeFilter}
          helperText={'Filtrar por'}
        >
          <MenuItem value='nombre'>Nombre</MenuItem>
          <MenuItem value='apellido'>Apellido</MenuItem>
        </MySelect>
        <MySelect
          value={orderBy}
          onChange={onChangeOrder}
          helperText={'Ordenar por edad'}
        >
          <MenuItem value='mayor'>Mayor</MenuItem>
          <MenuItem value='menor'>Menor</MenuItem>
        </MySelect>
      </div>
      <BasicTable>
        {users.length !== 0 &&
          searchValue === '' &&
          users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='right'>
                <Avatar src={user.avatar} />
              </TableCell>
              <TableCell align='right'>{user.firstName}</TableCell>
              <TableCell align='right'>{user.lastName}</TableCell>
              <TableCell align='right'>{user.age}</TableCell>
              <TableCell align='right'>
                <IconButton onClick={onDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        {searchValue !== '' &&
          filteredUsers.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='right'>
                <Avatar src={user.avatar} />
              </TableCell>
              <TableCell align='right'>{user.firstName}</TableCell>
              <TableCell align='right'>{user.lastName}</TableCell>
              <TableCell align='right'>{user.age}</TableCell>
              <TableCell align='right'>
                <IconButton onClick={onDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
      </BasicTable>
    </Fragment>
  )
}
