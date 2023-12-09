import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import UserDetails from './UserDetails'
import ConcertList from './ConcertList'
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const responseMessage = (response) => {
      console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
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
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default App;
