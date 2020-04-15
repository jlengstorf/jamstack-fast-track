import React from 'react';
import { navigate } from 'gatsby';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    window.localStorage.setItem(
      'githubUsername',
      formData.get('githubUsername'),
    );

    navigate('/dashboard/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="githubUsername">GitHub Username</label>
      <input type="text" id="githubUsername" name="githubUsername" />

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
