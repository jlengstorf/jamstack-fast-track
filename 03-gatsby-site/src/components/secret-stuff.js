import React from 'react';
import { navigate } from 'gatsby';

const SecretStuff = () => {
  const [githubUsername, setGithubUsername] = React.useState(false);

  React.useEffect(() => {
    const user = window.localStorage.getItem('githubUsername');

    if (!user) {
      navigate('/login/', { replace: true });
      return;
    }

    setGithubUsername(user);
  }, [githubUsername]);

  const handleLogout = (event) => {
    event.preventDefault();

    window.localStorage.removeItem('githubUsername');
    setGithubUsername(false);
  };

  if (!githubUsername) {
    return null;
  }

  return (
    <>
      <h2 style={{ alignItems: 'center', display: 'flex' }}>
        <img
          src={`https://github.com/${githubUsername}.png?size=120`}
          alt={githubUsername}
          style={{ borderRadius: '50%', marginRight: 10, width: 40 }}
        />
        Hi @{githubUsername}!
      </h2>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default SecretStuff;
