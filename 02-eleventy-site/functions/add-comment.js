const qs = require('querystring');
const { sendQuery } = require('./util/send-query');

exports.handler = async (event) => {
  const { githubUsername, comment, page } = qs.parse(event.body);

  if (!githubUsername || !comment || !page) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'GitHub username, comment, and page fields are all required.',
      }),
    };
  }

  return sendQuery({
    query: `
      mutation ($githubUsername: String! $comment: String! $page: String!) {
        createComment(data: {
          githubUsername: $githubUsername,
          comment: $comment,
          page: $page,
        }) {
          _id
          page
          githubUsername
          comment
        }
      }
    `,
    variables: { githubUsername, comment, page },
  });
};
