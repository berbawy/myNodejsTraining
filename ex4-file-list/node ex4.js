require("path");
const fs = require("fs");
const Dir = "./";

fs.readdir(Dir, function (err, files) {
    if (err) throw err;

    files.forEach(function (file) {
        if (fs.statSync(file).isDirectory()) console.log ("FOLDER: " + file);
        else console.log("FILE: " + file);
    });
});