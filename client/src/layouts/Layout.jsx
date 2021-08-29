import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>FanHub</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/teams'>Teams</Link>
          <Link to='/players'>Players</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}