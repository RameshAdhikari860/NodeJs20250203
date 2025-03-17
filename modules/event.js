import { EventEmitter } from "events";

// creating obj of eventEmitter
const eventEmmiter = new EventEmitter();

// register Event
eventEmmiter.on("hello", () => {
    console.log("this is event from hello")
});


