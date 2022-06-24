import React, { Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FirstChallenge } from '../containers/FirstChallenge'
import FourthChallenge from '../containers/FourthChallenge'
import { Layout } from '../containers/Layout'
import { SecondChallenge } from '../containers/SecondChallenge'
import { SecondChallengeRedux } from '../containers/SecondChallengeRedux'
import { ThirdChallenge } from '../containers/ThirdChallenge'
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='first' replace={true} />} />
          <Route path='first' element={<FirstChallenge />} />
          <Route
            path='second'
            element={
              <Fragment>
                <SecondChallenge />
                <SecondChallengeRedux />
              </Fragment>
            }
          />
          <Route path='third' element={<ThirdChallenge />} />
          <Route path='fourth' element={<FourthChallenge />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
