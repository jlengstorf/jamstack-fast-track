const fetch = require('node-fetch');

exports.sendQuery = async ({ query, variables }) => {
  const response = await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}` },
    body: JSON.stringify({ query, variables }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (response.errors && response.errors.length > 0) {
    return {
      statusCode: 500,
      body: JSON.stringify(response.errors[0].message),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
