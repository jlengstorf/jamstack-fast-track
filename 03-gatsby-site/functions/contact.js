const qs = require('qs');
const { sendQuery } = require('./util/send-query');

exports.handler = async (event) => {
  const { name, email, message } = qs.parse(event.body);

  return sendQuery({
    query: `
      mutation ($name: String! $email: String! $message: String!) {
        createContact(data: {
          name: $name
          email: $email
          message: $message
        }) {
          _id
        }
      }
    `,
    variables: { name, email, message },
  });
};
