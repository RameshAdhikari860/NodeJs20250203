import path from "path";

const filePath = "folder1/foler2/folder3/file.txt";

console.log(path.basename(filePath));

//extName
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath));

//dirname
console.log(path.dirname(filePath));

const __filename = url.fileUrlToPath(import.meta.url);
console.log(__filename);