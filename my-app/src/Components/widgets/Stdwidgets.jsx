import React from 'react'
import './Widgets.scss'
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ScoreboardTwoToneIcon from '@mui/icons-material/ScoreboardTwoTone';
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
const StdWidgets = ({ type }) => {

    let data;
   const amount =100;
   const diff =20;


    switch(type){
        case "user":
            data={
                title:"Total No Quiz",
                link:"attempt to improve ",
                icon: <FormatListNumberedIcon className="icon" />

    

            };
            break;
            case "topscorer":
            data={
                title:"Rank",
                link:"See all Top Rankers",
                icon: <ScoreboardTwoToneIcon  className="icon" style={{backgroundColor:'rgb(101, 39, 71)',color:"white"}}/>

                

            };
            break;
            case "quizlist":
            data={
                title:"Difficulty",
                link:"Crack now !",
                icon: <ModeEditOutlineIcon  className="icon"style={{backgroundColor:'rgb(27, 26, 94)',color:"white"}}/>

                

            };
            break;
            case "Feedback":
            data={
                title:"Responses",
                link:"See Response from Admin",
                icon: <AnnouncementTwoToneIcon className="icon" style={{backgroundColor:'rgb(102, 22, 125)',color:"white"}}/>


            };
            break;
            default:
                break;
    }


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpTwoToneIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default StdWidgets