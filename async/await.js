import fs from "fs/promises";

async function getAllData() {
    const users = await fs.readFile("users.json", "utf8");
    console.log(users);
}