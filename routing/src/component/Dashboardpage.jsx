import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboardpage = () => {
  return (
    <div>
      dashboard
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboardpage
