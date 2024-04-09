import React from 'react';
import { FaUser, FaPlus, FaUsers, FaList } from 'react-icons/fa';

const ProfileIcon = () => <FaUser size={30} color="blue" />;
const AddQuiz = () => <FaPlus size={30} color="green" />;
const Users = () => <FaUsers size={30} color="red" />;
const QuizList = () => <FaList size={30} color="orange" />;

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div>
                <h2>Profile</h2>
                <ProfileIcon />
            </div>
            <div>
                <h2>Add Quiz</h2>
                <AddQuiz />
            </div>
            <div>
                <h2>Users</h2>
                <Users />
            </div>
            <div>
                <h2>Quiz List</h2>
                <QuizList />
            </div>
        </div>
    );
};

export default Dashboard;
