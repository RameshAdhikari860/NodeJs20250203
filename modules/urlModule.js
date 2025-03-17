
const codeitUrl = "https://codeit.com.np/video/455";

const urlObj = new URL(codeitUrl);
console.log(urlObj);

const params = new URLSearchParams(urlObj.search);

console.log(params);

const newParams = params.append("time", "newParams");
console.log(newParams);