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
  const [concertId, setConcertId] = useState("");
  const [matchedUserIds, setMatchedUserIds] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="userList"
            element={
              <UserList
                userIds={matchedUserIds}
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
            element={<ConcertList setConcertId={setConcertId} />}
          />
          <Route
            path="concertDetails"
            element={
              <ConcertDetails
                concertId={concertId}
                userId={"2f549ace-7ce8-466e-b9c4-b973f2bb69bc"}
                setMatchedUserIds={setMatchedUserIds}
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
