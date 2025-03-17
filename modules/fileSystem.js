// Asynchronous - doesnt wait to finish task
// Synchronous  - wait to finish task 

import fs from 'fs';


// read data using fs********************************************

// const result = fs.readFileSync("data.txt", 'utf-8');

// console.log(result);

// read image ***********

// const image = fs.readFileSync("image.png", "base64")
// console.log(image);

// writing data ************************************************

// fs.writeFileSync("data.txt", "This file is updated");

//********************************************** */
// updating 

// fs.appendFileSync("data.txt", "\n this is added using append");

//  **************************************88
// Deleting
// unlink = remove file only
// rm = remove files and folders

// fs.rmSync("data.txt");
// fs.unlinkSync("data.txt");


//**************************************************************************************************************************** */

fs.readFile("data.txt", "utf8", (error, data) => {
    if (error) console.log(error);
    console.log(data);
});
console.log("hello world");

fs.writeFile("data.txt", "this is asynchronously written data", () => {
    console.log("data is written");
});

// fs.rm()
// fs.unlink()
// fs.append()