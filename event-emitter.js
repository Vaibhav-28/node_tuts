const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user: ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});
//first listen for event then emit
customEmitter.emit("response", "jhon", 34);
