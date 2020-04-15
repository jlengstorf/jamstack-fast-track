const qs = require('qs');

exports.handler = async (event) => {
  const { name, email, message } = qs.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ name, email, message }),
  };
};
