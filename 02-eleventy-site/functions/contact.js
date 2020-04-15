/* 
  1. Define the Contact type and update Fauna’s DB
  2. Create the mutation in Fauna’s GraphQL Playground to create contact entries
  3. Update contact.js serverless function to use sendQuery
 */

const qs = require('qs');

exports.handler = async (event) => {
  const { name, email, message } = qs.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ name, email, message }),
  };
};
