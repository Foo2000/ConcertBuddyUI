import React, { useState, useEffect } from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ec2-18-224-179-229.us-east-2.compute.amazonaws.com:8012/api/v1/users');
        const data = await response.json();
        setUsers(data); // Assuming data is an array of user objects
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
    <MDBListGroup>
      {users.map((user, index) => (
        <MDBListGroupItem key={index}>
          {/* Render user details here */}
          <h5>{user.name}</h5>
          <p>Age: {user.age}</p>
          {/* Add more details as needed */}
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
    )}
    </div>
  );
};

export default UserList;
