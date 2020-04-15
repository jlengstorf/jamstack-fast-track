const qs = require('qs');

exports.handler = async (event) => {
  const { githubUsername, comment, page } = qs.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ githubUsername, comment, page }),
  };
};
