import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { USERS } from '../utils'
import { reducer } from './reducer'

const initialState = {
  users: USERS.sort((a, b) => b.age - a.age),
  filteredUsers: []
}
const store = createStore(reducer, initialState)

export const AppProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
