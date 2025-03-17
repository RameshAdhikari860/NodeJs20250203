// Callback


// 1. Function used as parameter is callback function
//  2. The function which accepts function as parameter is Higher order function

// function myFunction(myParams) {

// }

// myFunction(function () { });



import fs from 'fs';
fs.readFile("data.txt", "utf8", (error, data) => {
    if (error) console.log(error);
    console.log(data);
});
