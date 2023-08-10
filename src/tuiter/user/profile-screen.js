import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };
    loadProfile();
  }, [dispatch]);

  return (
      <div>
        <h1>Profile Screen</h1>
        {profile && (
            <div>
              <div>
                <label>First Name</label>
                <input type="text" value={profile.firstName}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, firstName: event.target.value,
                         };
                         setProfile(newProfile);
                       }} />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" value={profile.lastName}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, lastName: event.target.value,
                         };
                         setProfile(newProfile);
                       }} />
              </div>
            </div>
        )}
        <button
            onClick={async () => {
              try {
                await dispatch(logoutThunk());
                navigate("/tuiter/login");
              } catch (error) {
                console.error('Error during logout:', error);
              }
            }}>
          Logout
        </button>
        <button onClick={save}>Save</button>
      </div>
  );
}

export default ProfileScreen;