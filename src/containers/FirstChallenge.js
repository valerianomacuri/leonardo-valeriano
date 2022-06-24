import React, { Fragment } from 'react'
import { getGifts } from '../utils'

export const FirstChallenge = () => {
  const gifts = getGifts()

  return (
    <Fragment>
      <div>FirstChallenge</div>
      {JSON.stringify(gifts, null, '\t')}
    </Fragment>
  )
}
