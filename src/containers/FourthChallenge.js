import { memo, useState } from 'react'
import { useFlasher } from '../utils/hooks'

const FourthChallenge = () => {
  const [age, setAge] = useState(3)
  const [name, setName] = useState('John Doe')

  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        value={name}
      />
      <NameDisplay name={name} />
      <hr />
      <input
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder='Age'
        value={age}
      />
      <AgeDisplay length={age} />
    </>
  )
}

export const AgeDisplay = memo(({ length, callback = (f) => f }) => {
  const myRef = useFlasher()
  callback()
  return (
    <div ref={myRef}>
      <p>Age: {length}</p>
    </div>
  )
})

export const NameDisplay = memo(({ name, callback = (f) => f }) => {
  const myRef = useFlasher()
  callback()
  return (
    <div ref={myRef}>
      <p>Your name is: {name}</p>
    </div>
  )
})

export default FourthChallenge
