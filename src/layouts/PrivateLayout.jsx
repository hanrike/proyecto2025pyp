import { Outlet } from 'react-router-dom'
import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default PrivateLayout;
