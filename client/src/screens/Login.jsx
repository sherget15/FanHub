import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
      <label>
        Username: &nbsp;

        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <br />
      <br />
      
      <label>
        Password: &nbsp;
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <br />
      <br />

      <Link to='/register'>Register</Link>

      &nbsp; &nbsp; &nbsp; &nbsp;
      
      <button>Submit</button>
    </form>
  );
}
