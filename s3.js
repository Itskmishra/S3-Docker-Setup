const fs = require("fs");
const S3rver = require("s3rver");

new S3rver({
  port: 9000,
  address: "0.0.0.0",
  directory: "./s3",
  configureBuckets: [
    {
      name: "testing-s3rver-platform",
      configs: [fs.readFileSync("./cors.xml")],
    },
  ],
}).run();
