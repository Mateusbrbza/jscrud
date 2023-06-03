function bodyParser() {
   let body = '';

   request.on('data', (chunk) => {
      body += chunk;
   });

   request.on('end', () => {
      body = JSON.parse(body);
      request.body = body;

      callBack();
   });
}

module.exports = bodyParser;