import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { handleRegister } = props;

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
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>

      <label>Username:</label>

        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      
      <br />

      <label>Email:</label>

        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

      <br />

      <label>Password:</label>

        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          minLength={6}
          onError="You password must be at least characters"
        />
      
      <br />

      <button>Submit</button>
    </form>
  );
}
