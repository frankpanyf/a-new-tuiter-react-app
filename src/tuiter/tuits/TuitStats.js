import React, { useState } from "react";

const TuitStats = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likes, setLikes] = useState(tuit.likes);

  const handleLikeToggle = () => {
    if (liked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setLiked((prevLiked) => !prevLiked);
  };

  return (
      <div className="tuit-stats">
        <div className="stats-item">
          <i className="bi bi-chat-left"></i>
          <span>{tuit.replies}</span>
        </div>
        <div className="stats-item">
          <i className="bi bi-arrow-repeat"></i>
          <span>{tuit.retuits}</span>
        </div>
        <div className="stats-item">
          <i
              className={`bi bi-heart${liked ? " text-danger" : ""}`}
              onClick={handleLikeToggle}
          ></i>
          <span>{likes}</span>
        </div>
        <div className="stats-item">
          <i className="bi bi-share"></i>
        </div>
      </div>
  );
};

export default TuitStats;
