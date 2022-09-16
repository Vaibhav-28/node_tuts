const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 9000,
  encoding: "utf-8",
});

//default : 64kb
//highWaterMark: size of buffer
//lastBuffer : remainder

stream.on("data", (res) => {
  console.log(res);
});

stream.on("error", (err) => console.log(err));
