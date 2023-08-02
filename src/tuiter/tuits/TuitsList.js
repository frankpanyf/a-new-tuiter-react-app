import React from "react";
import TuitItem from "./TuitItem";
import tuitsData from "./tuits.json"; // Adjust the import path based on the actual location of the tuits.json file.

const TuitsList = () => {
  return (
      <div className="tuits-list">
        {tuitsData.map((tuit) => (
            <TuitItem key={tuit._id} tuit={tuit} />
        ))}
      </div>
  );
};

export default TuitsList;
