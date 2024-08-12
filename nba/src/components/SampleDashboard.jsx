import React from 'react';

function SampleDashboard() {
  return (
    <div className="dashboard">
      <h1>Personalized Statistics</h1>
      <h2>Stay up to date with a <strong>custom dashboard</strong></h2>
      <div className="dashboard-content">
        <div className="player-tracking">
          <h3>Player tracking</h3>
        </div>
        <div className="team-tracking">
          <h3>Team tracking</h3>
        </div>
        <div className="fantasy-tracking">
          <h3>Fantasy team tracking</h3>
        </div>
        <div className='dashboard-img'>
            <img src="./src/assets/dashboardsamplepic.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SampleDashboard;