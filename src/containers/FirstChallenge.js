import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { getGifts } from '../utils'

export const FirstChallenge = () => {
  const gifts = getGifts()

  return (
    <Fragment>
      <Typography variant='body1' component={'h2'}>
        FirstChallenge
      </Typography>
      <code>{JSON.stringify(gifts, null, '\t')}</code>
    </Fragment>
  )
}
