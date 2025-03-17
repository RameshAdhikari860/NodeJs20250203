// resolve - success
// reject - failure

import fs from "fs/promises";

fs.readFile("data.txt", "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })