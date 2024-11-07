import React, { useState } from 'react'
import "./AdminDashboard.css"
import Header from './Header';
import AdminPanel from './AdminPanel';
import SideBar from './SideBar';

const AdminDashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar}/>
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminPanel />
    </div>
    </>
  )
}

export default AdminDashboard;