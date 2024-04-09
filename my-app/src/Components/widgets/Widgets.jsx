import React from 'react'
import './Widgets.scss'
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ScoreboardTwoToneIcon from '@mui/icons-material/ScoreboardTwoTone';
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
const Widgets = ({ type }) => {

    let data;
   const amount =100;
   const diff =20;


    switch(type){
        case "user":
            data={
                title:"USERS",
                link:"See all users",
                icon: <PersonOutlineTwoToneIcon className="icon" />

    

            };
            break;
            case "topscorer":
            data={
                title:"Top Scorer",
                link:"See all Top Rankers",
                icon: <ScoreboardTwoToneIcon  className="icon" style={{backgroundColor:'rgb(101, 39, 71)',color:"white"}}/>

                

            };
            break;
            case "quizlist":
            data={
                title:"Quiz Lists",
                link:"See all quiz",
                icon: <QuizTwoToneIcon className="icon"style={{backgroundColor:'rgb(27, 26, 94)',color:"white"}}/>

                

            };
            break;
            case "Feedback":
            data={
                title:"Feedback",
                link:"See all recent Feedback",
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

export default Widgets