import React from 'react'
import './Hompage.scss'
// import Sidebar from '../Sidebar/Sidebar'
import StdSidebar from '../Sidebar/Stdside'
import Navibar from '../navbar/Navibar'
// import Widgets from '../widgets/Widgets'
import StdWidgets from '../widgets/Stdwidgets'
const StdHompage = () => {
  return (
    <div className="home">
      <StdSidebar/>
      <div className="homeContainer">
        <Navibar/>
        <div className="widgets">
          <StdWidgets type="user"/>
          <StdWidgets type="topscorer"/>
          <StdWidgets type="quizlist"/>
          <StdWidgets type="Feedback"/>
        </div>
        <div className="welcome">
          <h1 style={{ color: "black", textAlign: "center" }}>Welcome Quizzers</h1>
        </div>
      </div>
    </div>
  )
}

export default StdHompage;