import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      
      <header>
      <Link to='/'><h1>FanHub</h1></Link>
        {currentUser ? (
        <div>
            <p>{currentUser.username} &nbsp; <button onClick={handleLogout}>Logout</button></p>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      </header>
      <hr />

      {currentUser && (
        <div>
        <br></br>
          <Link to='/teams'>Teams</Link>
          <br></br>
          <br></br>
          <Link to='/players'>Players</Link>
          <br></br>
          <br></br>
        </div>
      )}
      {props.children}
      
    </div>
  );
}


