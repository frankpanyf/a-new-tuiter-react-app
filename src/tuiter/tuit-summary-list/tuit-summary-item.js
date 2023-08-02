import React from "react";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";


const TuitSummaryItem = ({
  tuit = {
    "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",
    "title": `Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed`,
    "image": "tesla.png"
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div>{tuit.userName} . {tuit.time}</div>
            <div className="fw-bolder">{tuit.topic}</div>
            <div>{tuit.title}</div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt={tuit.userName} />
          </div>
          <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(tuit._id)}></i>

        </div>
      </li>
  );
};

export default TuitSummaryItem;
