const http = require("http");
const fs = require("fs");

const port = 8080;

const handler = async (req, res) => {
    if(req.url === "/" || req.url === "/index.html"){
        const data = await fs.promises.readFile("./index.html", "utf-8");

        res.writeHeader(200, { "Content-Type":"text/html"});
        res.write(data);
        res.end();
    } else if(req.url === "/about" || req.url === "/about.html"){
        const data = await fs.promises.readFile("./about.html", "utf-8");

        res.writeHeader(200, {"Content-Type":"text/html"});
        res.write(data);
        res.end();
    } else if(req.url === "/contact-me" || req.url === "/contact.html"){
        const data = await fs.promises.readFile("./contact.html", "utf-8");

        res.writeHeader(200, {"Content-Type":"text/html"});
        res.write(data);
        res.end();
    } else{
        const data = await fs.promises.readFile("./404.html", "utf-8");

        res.statusCode = 404;
        res.setHeader("Content-Type","text/html");
        res.end(data);
    }
};

http.createServer(handler).listen(port, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});