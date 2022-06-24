import Header from './components/Header'
import { FirstChallenge } from './containers/FirstChallenge'
import { Fragment } from 'react'
import { SecondChallenge } from './containers/SecondChallenge'
import FourthChallenge from './containers/FourthChallenge'

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
        <FourthChallenge />
      </div>
    </Fragment>
  )
}

export default App
