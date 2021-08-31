import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneTeam } from '../services/teams';
import { addPlayerToTeam } from '../services/players';

export default function TeamDetail(props) {
  const [teamItem, setTeamItem] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const { id } = useParams();
  const { players } = props;

  useEffect(() => {
    const fetchTeamItem = async () => {
      const teamData = await getOneTeam(id);
      setTeamItem(teamData);
    };
    fetchTeamItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedPlayer(value);
  };

  // Our handle submit for adding the player to our team
  const handleSubmit = async (e) => {
    e.preventDefault();
    const teamItem = await addPlayerToTeam(id, selectedPlayer);
    setTeamItem(teamItem);
  };

  return (
    <div>
      <h3>{teamItem?.name}</h3>
      {teamItem?.players.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a player*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a Player --
          </option>
          {/* now we loop over all players and return an <option> tag for each */}

          {players.map((player) => (
            // we track the player's id as the "value" which will get added to state onChange
            // the player's name goes between the open and close tag which is what the user sees
            <option value={player.id}>{player.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}