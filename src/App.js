import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import UserDetails from "./Pages/UserDetails";
import UserList from "./Pages/UserList";
import ConcertDetails from "./Pages/ConcertDetails";
import ConcertList from "./Pages/ConcertList";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    /*<MDBContainer fluid>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='text-center'>
          <img
            className='mb-4'
            src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
            style={{ width: 250, height: 90 }}
          />
          <h5 className='mb-3'>
            Thank you for using our product. We're glad you're with us.
          </h5>
          <p className='mb-3'>MDB Team</p>
          <MDBBtn
            tag='a'
            href='https://mdbootstrap.com/docs/standard/getting-started/'
            target='_blank'
            role='button'
          >
            Start MDB tutorial
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>*/
    //<ConcertList/>
    <div>
      <h2>ConcertBuddy Google SSO Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google SSO </button>
      )}
      <UserList userIds={["2f549ace-7ce8-466e-b9c4-b973f2bb69bc", "d88ffc06-8905-4c8a-b8f0-2b7aa3f7396c", "0e21d65c-203a-4ba8-88f6-06cac7a0a2ca"]}/>
      <UserDetails userId={"2f549ace-7ce8-466e-b9c4-b973f2bb69bc"}/>
      <ConcertList page={10} size={5}/>
      <ConcertDetails concertId={"140ec861-33c0-48f8-bf8b-79e0e366599e"} userId={"2f549ace-7ce8-466e-b9c4-b973f2bb69bc"}/>
    </div>
  );
}

export default App;
