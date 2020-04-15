/* 
  1. Define the Contact type and update Fauna’s DB
  2. Create the mutation in Fauna’s GraphQL Playground to create contact entries
  3. Update contact.js serverless function to use sendQuery
 */

const qs = require('qs');
const { sendQuery } = require('./util/send-query');

exports.handler = async (event) => {
  const { name, email, message } = qs.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'name, email, and message fields are all required.',
      }),
    };
  }

  return sendQuery({
    query: `
      mutation ($name: String! $email: String! $message: String!) {
        createContact(data: {
          name: $name,
          email: $email,
          message: $message,
        }) {
          _id
          message
          name
          email
        }
      }
    `,
    variables: { name, email, message },
  });
};
