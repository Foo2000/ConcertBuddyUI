import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OtherUserDetails({ userId, resourceUrl }) {
  const [user, setUser] = useState(null);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userUrl = resourceUrl + ":8012";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`${userUrl}/api/v1/users/${userId}`);
        const userData = await userResponse.json();
        setUser(userData); // Assuming userData is a User object

        const songsResponseResponse = await fetch(
          `${userUrl}/api/v1/users/${userId}/songs`
        );
        const songsResponseData = await songsResponseResponse.json();
        setSongs(songsResponseData._embedded.songList); // Assuming songsResponseData is a Songs Response object

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
    }
    return array;
  }

  const shuffledSongs = shuffleArray(songs);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">

            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    {user.profilePictureUrl ? (
                      <MDBCardImage
                        src={user.profilePictureUrl}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: "150px" }}
                        fluid
                      />
                    ) : (
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: "150px" }}
                        fluid
                      />
                    )}
                    <p className="text-muted mb-1">ConcertBuddy User</p>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <Link to="/userList">
                          <button className="btn btn-primary" >Back To the List</button>
                        </Link>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.name}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Age</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.age}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          <span className="text-primary font-italic me-1">
                            Top Songs
                          </span>
                        </MDBCardText>

                        {shuffledSongs.length > 5 ? (
                          // Display the first 5 elements if there are more than 5 songs, else display all
                          <>
                            <MDBCardText
                              className="mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[0].name}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[1].name}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[2].name}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[3].name}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[4].name}
                            </MDBCardText>
                          </>
                        ) : (
                          // Display all songs if there are 5 or fewer
                          shuffledSongs.map((song, index) => (
                            <MDBCardText
                              key={index}
                              className="mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {song.name}
                            </MDBCardText>
                          ))
                        )}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          <span className="text-primary font-italic me-1">
                            Top Artists
                          </span>
                        </MDBCardText>

                        {shuffledSongs.length > 5 ? (
                          // Display the first 5 elements if there are more than 5 songs, else display all
                          <>
                            <MDBCardText
                              className="mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[0].artist}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[1].artist}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[2].artist}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[3].artist}
                            </MDBCardText>
                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {shuffledSongs[4].artist}
                            </MDBCardText>
                          </>
                        ) : (
                          // Display all songs if there are 5 or fewer
                          shuffledSongs.map((song, index) => (
                            <MDBCardText
                              key={index}
                              className="mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {song.name}
                            </MDBCardText>
                          ))
                        )}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </div>
  );
}
