const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // The error is caught here, but the response is not sent
    console.error('Error:', error);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail randomly
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}