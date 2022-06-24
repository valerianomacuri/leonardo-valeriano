import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div
        style={{
          padding: 20
        }}
      >
        <Outlet />
      </div>
    </Fragment>
  )
}
