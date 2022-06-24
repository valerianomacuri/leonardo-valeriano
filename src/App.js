import { AppRouter } from './components/AppRouter'
import { AppProvider } from './redux/AppProvider'

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
