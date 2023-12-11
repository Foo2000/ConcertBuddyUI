import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/userList">User List</Link>
          </li>
          <li>
            <Link to="/userDetails">User Details</Link>
          </li>
          <li>
            <Link to="/concertList">Concert List</Link>
          </li>
          <li>
            <Link to="/concertDetails">Concert Details</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
