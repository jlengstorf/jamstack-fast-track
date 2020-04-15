const { sendQuery } = require('./util/send-query');

exports.handler = async (event) => {
  const { page } = JSON.parse(event.body);
  return sendQuery({
    query: `
      query ($page: String!) {
        commentsByPage(page: $page) {
          data {
            githubUsername
            comment
          }
        }
      }
    `,
    variables: {
      page,
    },
  });
};
