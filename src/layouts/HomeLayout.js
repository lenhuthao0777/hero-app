import React from 'react'
import TopBar from '../components/TopBar'

const HomeLayout = ({children}) => {
  return (
    <>
      <TopBar/>
      {children}
    </>
  )
}

export default HomeLayout
