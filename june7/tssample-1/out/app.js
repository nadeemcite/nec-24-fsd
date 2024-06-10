"use strict";
// js method => const express = require('express')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var temperature_1 = require("./temperature");
exports.app = (0, express_1.default)();
exports.app.get("/", function (req, res) {
    res.send("Hello World");
});
exports.app.get("/temperature", function (req, res) {
    var c = parseFloat(req.query.c);
    if (isNaN(c)) {
        res.sendStatus(500);
    }
    else {
        res.send((0, temperature_1.convertCtoF)(c).toString());
    }
});
