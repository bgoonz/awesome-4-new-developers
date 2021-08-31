import http from "http";

http
  .get(process.argv[2], (res) => {
    res.on("error", console.error);
    res
      .on("data", (data) => {
        console.log(data);
      })
      .setEncoding("utf8");
  })
  .on("error", console.error);
