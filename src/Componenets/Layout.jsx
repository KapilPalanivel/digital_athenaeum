import React from 'react'
import Navbar from './Common/Navbar/navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
   <>
   <Navbar />
   <div>
    <Outlet />
   </div>
   </>
  )
}

export default Layout