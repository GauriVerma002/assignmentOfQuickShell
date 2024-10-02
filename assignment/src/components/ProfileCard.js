import React from 'react';
import { useEffect, useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching the tickets and users data from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // For debugging
        setTickets(data.tickets);  // Set the tickets data
        setUsers(data.users);      // Set the users data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to find user by userId for each ticket
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  return (
    <div className="profile-card">
      <img src={profile.avatar} alt={`${profile.name}'s avatar`} className="profile-image" />
      <h2>{profile.name}</h2>
      <p>{profile.position}</p>
      <p>{profile.status}</p>
      <p>{profile.priority}</p>
    </div>
  );
}

export default ProfileCard;
