import React from "react";
import tuitsArray from './tuits.json';
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
  return (
      <ul className="list-group">
        <li className="list-group-item">
          <h3>Tuit Summary List</h3>
        </li>
        {tuitsArray.map(tuit => (
            <TuitSummaryItem key={tuit._id} tuit={tuit} />
        ))}
      </ul>
  );
};

export default TuitSummaryList;
