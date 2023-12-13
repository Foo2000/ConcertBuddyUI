import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import UserList from "./pages/UserList";
import ConcertDetails from "./pages/ConcertDetails";
import ConcertList from "./pages/ConcertList";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const [userId, setUserId] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="userList"
            element={
              <UserList
                userIds={[
                  "2f549ace-7ce8-466e-b9c4-b973f2bb69bc",
                  "d88ffc06-8905-4c8a-b8f0-2b7aa3f7396c",
                  "0e21d65c-203a-4ba8-88f6-06cac7a0a2ca",
                ]}
              />
            }
          />
          <Route
            path="userDetails"
            element={
              <UserDetails userId={"2f549ace-7ce8-466e-b9c4-b973f2bb69bc"} />
            }
          />
          <Route
            path="concertList"
            element={<ConcertList page={10} size={5} />}
          />
          <Route
            path="concertDetails"
            element={
              <ConcertDetails
                concertId={"140ec861-33c0-48f8-bf8b-79e0e366599e"}
                userId={"2f549ace-7ce8-466e-b9c4-b973f2bb69bc"}
              />
            }
          />
          <Route path="login" element={<Login userId={userId} setUserId={setUserId}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
