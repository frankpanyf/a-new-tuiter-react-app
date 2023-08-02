import React from "react";
import TuitStats from "./TuitStats";

const TuitItem = ({ tuit }) => {
  return (
      <div className="tuit-item">
        <div className="user-info">
          <img src={`/images/${tuit.image}`} alt={tuit.userName} />
          <div className="user-details">
            <span className="user-name">{tuit.userName}</span>
            <span className="user-handle">{tuit.handle}</span>
            <span className="time">{tuit.time}</span>
          </div>
        </div>
        <div className="tuit-content">{tuit.tuit}</div>
        <TuitStats tuit={tuit} />
      </div>
  );
};

export default TuitItem;
