import React from 'react';

function CommunityInsightsSample() {
  return (
    <div className="community-insights">
      <h2>Community Insights</h2>
      <div className="carousel">
        {/* Add carousel for other users' fantasy teams */}
        <button className="carousel-control left">&lt;</button>
        <div className="carousel-items">
          <img src="./src/assets/communitysamplepic.png" alt="" />
        </div>
        <button className="carousel-control right">&gt;</button>
      </div>
    </div>
  );
}

export default CommunityInsightsSample;