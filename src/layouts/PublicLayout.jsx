import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'

const PublicLayout = () => {
  {/**Lo primero que requiero es definir los componenetes que voy a tener*/}
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='h-full overflow-y-scroll bg-blue-400'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default PublicLayout;
