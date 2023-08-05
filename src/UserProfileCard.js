import React from 'react';
import ReactDOM from 'react-dom';

function UserProfileCard() {
    return (
        <div className="user-profile-card">
            <img src="liam.jpeg" alt="profile" />
            <h1>William van Houten</h1>
            <p>20+ Followers | 15+ Projects</p>
            <h3>Aspiring Software Engineer</h3>
            <p>Always code as if the person who ends up maintaining your code will be 
                a violent psychopath who knows where you live.</p>
            <div className="buttons-container">
                <a href="https://github.com/WilliamvanHouten" className="follow-button">Follow Me</a>
                <button className="profile-button">View Profile</button>
            </div>
        </div>
    );
}

export default UserProfileCard;