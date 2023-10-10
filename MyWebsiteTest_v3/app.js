const express = require("express");
//const https = require("https");
const axios = require("axios");
const API_KEY = "90c98836fd653fffdc75eec71574d690";
const CITY_NAME = "Toronto";

// express app
const app = express();

app.set("view engine", "ejs");

// the default path is /views
// if you like to change it, use the following line:
// app.set("views", "myviews");

app.get("/", async (req, res) => {
  const blogs = [
    { title: "Blog 1", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Blog 2", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Blog 3", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];

  // https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  //   let data = "";

  //   res.on("data", (chunk) => {
  //     data += chunk;
  //   });

  //   res.on("end", () => {
  //     console.log(JSON.parse(data)[0].title);
  //   });
  // });

  // let userEmail = "";

  // await axios
  //   .get("https://jsonplaceholder.typicode.com/comments")
  //   .then((res) => {
  //     userEmail = res.data[0].email;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  let tempInCelsius = 0;

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
    )
    .then((res) => {
      const tempInKelvin = res.data["main"]["temp"];
      tempInCelsius = tempInKelvin - 273.15;
      tempInCelsius = Math.round(tempInCelsius);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(tempInCelsius);
  res.render("index", { title: "Homepage", blogs, tempInCelsius, CITY_NAME });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
