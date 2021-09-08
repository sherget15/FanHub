import { Link } from "react-router-dom";

export default function Teams(props) {
  const { teams, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Teams</h3>
      {teams.map((team) => (

        <div key={team.id}>
          
          <Link to={`/teams/${team.id}`}><p>{team.name}</p></Link>
          {currentUser?.id === team.user_id && (

            <div>
              <br></br>
              <Link to={`/teams/${team.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(team.id)}>Delete</button>
              <br></br>
            </div>
          )}

        </div>
      ))}

      <Link to='/teams/new'><button>Create</button></Link>
    </div>
  );
}