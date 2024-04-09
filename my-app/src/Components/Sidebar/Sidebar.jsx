import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import './Sidebar.scss'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo" style={{backgroundColor:"white"}}>QuizAdmin</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">Main</p>
            <li><DashboardIcon className="icons"/><span>Dashboard</span></li>
            <p className="title">Lists</p>
        <li><PeopleAltSharpIcon className="icons"/><span ><a href="/Users"style={{textDecoration:"none"}}>Users</a></span></li>
        <p className="title">Add</p>
        <li><AddCircleOutlineOutlinedIcon className="icons"/><span ><a href="/quizzAdd"style={{textDecoration:"none"}}>QuizzAdd</a></span></li>
        <p className="title">Lists</p>
        <li><FormatListBulletedSharpIcon className="icons"/><span ><a href="/Quizlist"style={{textDecoration:"none"}}>Quizlists</a></span></li>
        <li><ChatIcon className="icons"/><span>FeedBack</span></li>
        </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
    </div>
  )
}

export default Sidebar