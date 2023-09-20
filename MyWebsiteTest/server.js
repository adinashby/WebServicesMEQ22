const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  // console.log("request made");
  //console.log(req.url, req.method);
  // send a request to /about

  // set header content type
  // res.setHeader("Content-Type", "text/plain");
  // res.write("hello, vanier students");
  // res.end();

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // res.write('<head><link rel="stylesheet" href="#"</head>');
  // res.write("<p>hello, vanier students<p>");
  // res.write("<p>hello again, vanier students<p>");
  // res.end();

  // send an html file
  //   fs.readFile("./views/index.html", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end();
  //     } else {
  //       // res.write(data);
  //       // res.write(data);
  //       // res.end();
  //       // res.end(data);
  //     }
  //   });
  // });

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // res.write(data);
      // res.end();
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
