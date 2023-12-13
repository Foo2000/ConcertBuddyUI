import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ profile, login, logOut }) {
  return (
    <div>
      <h2>ConcertBuddy Google SSO Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <h3>{profile.name} Logged in</h3>
          <br />
          <br />
          <Link to="/userDetails">
            <button>Profile</button>
          </Link>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google SSO </button>
      )}
    </div>
  );
}

export default Login;
