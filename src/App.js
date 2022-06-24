import Header from './components/Header'
import { FirstChallenge } from './containers/FirstChallenge'
import { Fragment } from 'react'
import { SecondChallenge } from './containers/SecondChallenge'

const App = () => {
  return (
    <Fragment>
      <Header />
      <div
        style={{
          padding: 20
        }}
      >
        <FirstChallenge />
        <SecondChallenge />
      </div>
    </Fragment>
  )
}

export default App
