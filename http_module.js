const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome");
  }
  if (req.url === "/about") {
    res.end("about <<-- here");
  }
  res.end(`
  <a href="/">go home</a>
  `);
});

server.listen(3500);
