var cluster = require("cluster");
var http = require("http");
var noOfCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master with process ID : ${process.pid} is running`);

  //Fork Workers
  for (var i = 0; i < noOfCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker with process ID : ${worker.process.pid} died`);
  });
} else {
  //Workers sharing an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("An example of cluster\n");
    })
    .listen(3000);
  console.log(`Worker with process ID : ${process.pid} started`);
}
