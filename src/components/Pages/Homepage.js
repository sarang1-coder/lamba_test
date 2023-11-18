import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import '../../assets/styles/homapage.css'

const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </>
  )
}

export default Homepage
