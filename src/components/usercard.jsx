import React from 'react';
import './usercard.css'; 

function Usercard() {
  const profilePhoto = 'https://dummyimage.com/150x150/cccccc/000000.png&text=Profile';
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const phone = '+91 9876543210';
  const address = '123 Main Street, Anytown, India';

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="name">{name}</h2>
      <p className="info">Email: {email}</p>
      <p className="info">Phone: {phone}</p>
      <p className="info">Address: {address}</p>
    </div>
  );
}

export default Usercard;