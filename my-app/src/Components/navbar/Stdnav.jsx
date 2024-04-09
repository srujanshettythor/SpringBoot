import React from 'react'
import './Navibar.scss'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
const Navibar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchSharpIcon/>
      </div>
      <div className="items">
        <div className="item">
        <LanguageSharpIcon className="icon"/>
        </div>
        <div className="item">
        <NotificationsSharpIcon className="icon"/>
        <div className="counter">2</div>
        </div>
        <div className="item">
        <AccountCircleTwoToneIcon className="icon"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navibar