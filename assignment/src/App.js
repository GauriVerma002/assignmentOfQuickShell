import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>Profile Dashboard</h1>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
