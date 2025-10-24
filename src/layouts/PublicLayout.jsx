import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'

const PublicLayout = () => {
  {/**Lo primero que requiero es definir los componenetes que voy a tener*/}
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default PublicLayout;
