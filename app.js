const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/api/v1' || req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        // res.write();
        res.end(JSON.stringify({
            slackUsername: "DavidUk",
            backend: true,
            age: 31,
            bio: "Fullstack engineer with experience "
        }));
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Incorrect url" }))
    }
})


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})