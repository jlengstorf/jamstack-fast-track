const qs = require('querystring');

exports.handler = async (event) => {
  const { githubUsername, comment, page } = qs.parse(event.body);

  // validate this data

  return {
    statusCode: 200,
    body: JSON.stringify({ githubUsername, comment, page }),
  };
};
