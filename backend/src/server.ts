import * as http from 'http';

const PORT = Number(process.env.PORT) || 3000;

http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Backend running 🚀' }));
}).listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
// trigger backend ci
