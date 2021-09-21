import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav />
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