import { Link } from "react-router-dom";

export default function Nav(props) {
    const { currentUser, handleLogout } = props;


    return (
        <Nav>
            <Link to='/'><h1>FanHub</h1></Link>
        {currentUser ? (
        <div>
            <p>{currentUser.username} &nbsp; <button onClick={handleLogout}>Logout</button></p>
        </div>
      ) : (
          <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          </div>
      )}
        </Nav>
    )
}