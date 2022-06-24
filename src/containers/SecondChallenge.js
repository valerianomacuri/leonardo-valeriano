import { TableCell, TableRow } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { BasicTable } from '../components/BasicTable'
import { USERS } from '../utils'

export const SecondChallenge = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [orderBy, setOrderBy] = useState('mayor')
  const [filter, setFilter] = useState('nombre')
  const [searchValue, setSearchValue] = useState('')

  const onSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const onDelete = (id) => () => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  const onChangeOrder = (e) => {
    setOrderBy(e.target.value)
  }

  const onChangeFilter = (e) => {
    setFilter(e.target.value)
  }
  useEffect(() => {
    if (users.length === 0) return
    if (filter === 'nombre') {
      const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchValue.toLowerCase())
      )
      setFilteredUsers([...filteredUsers])
    }
    if (filter === 'apellido') {
      const filteredUsers = users.filter((user) =>
        user.lastName.toLowerCase().includes(searchValue.toLowerCase())
      )
      setFilteredUsers([...filteredUsers])
    }
  }, [searchValue])

  useEffect(() => {
    if (users.length === 0) {
      setUsers(USERS.sort((a, b) => b.age - a.age))
    }
  }, [])

  useEffect(() => {
    if (users.length === 0) return
    let sortUsers = []
    if (orderBy === 'mayor') {
      sortUsers = users.sort((a, b) => b.age - a.age)
    }
    if (orderBy === 'menor') {
      sortUsers = users.sort((a, b) => a.age - b.age)
    }
    setUsers([...sortUsers])
  }, [orderBy])

  return (
    <Fragment>
      <div>SecondChanllenge</div>
      <div>
        <input value={searchValue} onChange={onSearch} />
        <span>Filtrar por</span>
        <select value={filter} onChange={onChangeFilter}>
          <option value='nombre'>Nombre</option>
          <option value='apellido'>Apellido</option>
        </select>
      </div>
      <div>
        <span>Ordenar por edad</span>
        <select value={orderBy} onChange={onChangeOrder}>
          <option value='mayor'>Mayor</option>
          <option value='menor'>Menor</option>
        </select>
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
                <button onClick={onDelete(user.id)}>Borrar</button>
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
                <button onClick={onDelete(user.id)}>Borrar</button>
              </TableCell>
            </TableRow>
          ))}
      </BasicTable>
    </Fragment>
  )
}
