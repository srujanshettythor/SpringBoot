import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import CategoryIcon from '@mui/icons-material/Category';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './Sidebar.scss'
const StdSidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo"style={{color:"#152CB7",backgroundColor:"#B4B5BB"}}>Student Admin</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">Main</p>
            <li><DashboardIcon className="icons"/><spans style={{color:"#071FB0"}}>Dashboard</spans></li>
            <p className="title">Quiz</p>
        <li><TouchAppIcon className="icons"/> <span><a href="/Conduct"style={{textDecoration:"none"}}>Attempt</a></span></li>
        <p className="title">Lists</p>
        <li><CategoryIcon  className="icons"/><span><a href="/Division"style={{textDecoration:"none"}}>Category</a></span></li>
        <li><ChatIcon className="icons"/><span><a href="/Feedback"style={{textDecoration:"none"}}>FeedBack</a></span></li>
        </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            
        </div>
    </div>
  )
}

export default StdSidebar