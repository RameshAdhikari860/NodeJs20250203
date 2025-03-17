import fs from "fs";

const CbToPromise = new Promise((resolve, reject) => {
    fs.readFile("data1.txt", "utf8", (error, data) => {
        if (error) return reject("something went wrong");
        resolve(data);
    })
});

CbToPromise.then((data) =>
    console.log(data))
    .catch((error) => {
        console.log(error);
    })