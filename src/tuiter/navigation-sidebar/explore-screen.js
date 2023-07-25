import React from 'react';
import TuitSummaryList from "../tuit-summary-list";


const ExploreScreen = () => {
  const sampleTuit = {
    "topic": "Science",
    "userName": "NASA",
    "time": "1h",
    "title": "The James Webb Telescope successfully launched and reached L2 point",
    "image": "./././images/nasa.png"
  };


  return (
      <div>
        <h1>Explore Screen</h1>
        <ul>
          <TuitSummaryList/>
          {/*<TuitSummaryItem/>*/}
        </ul>
      </div>
  );
};

export default ExploreScreen;
