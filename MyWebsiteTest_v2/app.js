const express = require("express");

// express app
const app = express();

app.set("view engine", "ejs");

// the default path is /views
// if you like to change it, use the following line:
// app.set("views", "myviews");

app.get("/", (req, res) => {
  const blogs = [
    { title: "Blog 1", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Blog 2", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Blog 3", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];

  res.render("index", { title: "Homepage", blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
