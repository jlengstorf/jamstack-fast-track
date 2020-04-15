const qs = require('qs');
const { sendQuery } = require('./util/send-query');

exports.handler = async (event) => {
  const { githubUsername, comment, page } = qs.parse(event.body);

  console.log({ githubUsername, comment, page });

  if (!githubUsername || !comment || !page) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'The githubUsername, comment, and page fields are all required.',
      }),
    };
  }

  return sendQuery({
    query: `
      mutation ($githubUsername: String! $comment: String! $page: String!) {
        createComment(data: {
          githubUsername: $githubUsername
          comment: $comment
          page: $page
        }) {
          _id
        }
      }
    `,
    variables: { githubUsername, comment, page },
  });
};
