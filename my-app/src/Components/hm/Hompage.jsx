import React from 'react'
import './Hompage.scss'
import Sidebar from '../Sidebar/Sidebar'
import Navibar from '../navbar/Navibar'
import Widgets from '../widgets/Widgets'
const Hompage = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navibar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="topscorer"/>
          <Widgets type="quizlist"/>
          <Widgets type="Feedback"/>
        </div>
        <div className="welcome">
          <h1 style={{ color: "black", textAlign: "center" }}>WELCOME ADMIN</h1>
        </div>
      </div>
    </div>
  )
}

export default Hompage;