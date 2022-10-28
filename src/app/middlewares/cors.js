module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'https://myproducts1.netlify.app');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '5');

  next();
};
