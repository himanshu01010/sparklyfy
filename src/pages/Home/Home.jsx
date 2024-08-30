import React from 'react'
import { Outlet } from 'react-router-dom'
// import SideNavbar from "../../components/SideNavbar"
const Home = () => {
  return (
    <div className="flex h-full">
      {/* <SideNavbar/> */}
      <div className="flex-grow overflow-auto ">
        <Outlet />
      </div>
    </div>
  )
}

export default Home;