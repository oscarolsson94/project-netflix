import React from 'react';
import './ProfileScreen.css';
import Nav from '../Components/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const ProfileScreen = () => {

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen" >
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://occ-0-285-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" alt="netflix avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
