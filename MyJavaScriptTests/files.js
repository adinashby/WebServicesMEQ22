const fs = require("fs");
// const os = require("os");

//console.log(fs);
// console.log(os);

// read files
fs.readFile("./docs/blog1.txt", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

// writing to files
fs.writeFile("./docs/blog2.txt", "Hello, again", () => {
    console.log("file was written");
})

fs.appendFile("./docs/blog2.txt", "Hello, again", () => {
    console.log("file was written");
})
