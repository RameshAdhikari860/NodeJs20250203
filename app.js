// http module - server creat
import { EventEmitter } from "events";
import http from "http";

const server = http.createServer((req, res) => {
    res.end("Hello world");
});

server.listen(2000, () => {
    console.log("Server running at port 5000.")
});

