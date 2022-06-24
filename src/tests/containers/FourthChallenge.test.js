import { render } from '@testing-library/react'
import { AgeDisplay, NameDisplay } from '../../containers/FourthChallenge'
describe('<FourthChallenge />', () => {
  it('should avoid rerendering the component AgeDisplay', () => {
    const age = 10
    const callback = jest.fn()
    const { rerender } = render(<AgeDisplay length={age} callback={callback} />)
    rerender(<AgeDisplay length={age} callback={callback} />)
    expect(callback).toBeCalledTimes(1)
  })
  it('should rerendering the component AgeDisplay when change props', () => {
    let age = 10
    const callback = jest.fn()
    const { rerender } = render(<AgeDisplay length={age} callback={callback} />)
    age = 20
    rerender(<AgeDisplay length={age} callback={callback} />)
    expect(callback).toBeCalledTimes(2)
  })
  it('should avoid rerendering the component NameDisplay', () => {
    const name = 'John'
    const callback = jest.fn()
    const { rerender } = render(<NameDisplay name={name} callback={callback} />)
    rerender(<NameDisplay name={name} callback={callback} />)
    expect(callback).toBeCalledTimes(1)
  })
  it('should rerendering the component NameDisplay when change props', () => {
    let name = 'John'
    const callback = jest.fn()
    const { rerender } = render(<NameDisplay name={name} callback={callback} />)
    name = 'Jane'
    rerender(<NameDisplay name={name} callback={callback} />)
    expect(callback).toBeCalledTimes(2)
  })
})
