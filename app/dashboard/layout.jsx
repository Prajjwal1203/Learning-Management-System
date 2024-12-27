import React from 'react'
import SideBar from './_components/SideBar'
import DashboardHeader from './_components/DashboardHeader'

function Dashboardlayout({children}) {
  return (
    <div>
      <div className='md:w-64 hidden md:block fixed'>
        <SideBar></SideBar>
      </div>
      <div className='md:ml-64'>
        <DashboardHeader></DashboardHeader>
        <div className='p-10'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dashboardlayout