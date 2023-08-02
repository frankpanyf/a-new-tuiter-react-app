import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./navigation-sidebar/home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer.js";
import TuitsList from "./tuits/TuitsList";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
  return (
      <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/tuiter/tuits" element={<TuitsList />} /> {/* Add route for TuitsList */}
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList/>
          </div>
        </div>
      </div>
      </Provider>
  );
}
export default Tuiter;