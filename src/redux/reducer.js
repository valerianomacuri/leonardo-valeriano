import { USERS } from '../utils'

export const types = {
  DELETE: 'DELETE',
  ORDER_BY: 'ORDER_BY',
  FILTER: 'FILTER'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.DELETE:
      const newUsers = state.users.filter((user) => user.id !== action.payload)
      return {
        ...state,
        users: [...newUsers]
      }
    case types.ORDER_BY:
      let sortUsers = []
      if (action.payload === 'mayor') {
        sortUsers = state.users.sort((a, b) => b.age - a.age)
      }
      if (action.payload === 'menor') {
        sortUsers = state.users.sort((a, b) => a.age - b.age)
      }
      return {
        ...state,
        users: [...sortUsers]
      }
    case types.FILTER:
      const { filter, searchValue } = action.payload
      if (filter === 'nombre') {
        if (searchValue === '') {
          return {
            ...state,
            filteredUsers: []
          }
        }
        const filteredUsers = state.users.filter((user) =>
          user.firstName.toLowerCase().includes(searchValue.toLowerCase())
        )
        return {
          ...state,
          filteredUsers: [...filteredUsers]
        }
      }
      if (filter === 'apellido') {
        if (searchValue === '') {
          return {
            ...state,
            filteredUsers: []
          }
        }
        const filteredUsers = state.users.filter((user) =>
          user.lastName.toLowerCase().includes(searchValue.toLowerCase())
        )
        return {
          ...state,
          filteredUsers: [...filteredUsers]
        }
      }
    default:
      return state
  }
}
