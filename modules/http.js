import http from "http";

const server = http.createServer((req, res) => {
    res.write("Helloworld");
    console.log(res.method);
    res.end();
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server running at port: " + PORT);

})