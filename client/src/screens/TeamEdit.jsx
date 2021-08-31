import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function TeamEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const {teams, handleUpdate} = props;
  const {id} = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const teamItem = teams.find((team) => team.id === Number(id));
      setFormData({ name: teamItem.name })
    }
    if (teams.length) {
      prefillFormData()
    }
  }, [teams, id])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <label>
        Name:
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )

}