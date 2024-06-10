"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = 8080;
app_1.app.listen(PORT, function () {
    console.log("Server is running at ".concat(PORT));
});
