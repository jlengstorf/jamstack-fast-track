const { sendQuery } = require('./util/send-query');

exports.handler = async (event) => {
  const { githubUsername } = JSON.parse(event.body);
  return sendQuery({
    query: `
      query ($githubUsername: String!) {
        commentsByUser(githubUsername: $githubUsername) {
          data {
            comment
            page
          }
        }
      }
    `,
    variables: {
      githubUsername,
    },
  });
};
