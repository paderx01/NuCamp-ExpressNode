const express = require("express");
const Partner = require("../models/partner");
const authenticate = require("../authenticate");

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post(authenticate.verifyAdmin, (req, res) => {
    res.end(
      `Will add the partners: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put(authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  .delete(authenticate.verifyAdmin, (req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  .route("/partnersId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post(authenticate.verifyAdmin, (req, res, next) => {
    res.end(
      `Will add the partners: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put(authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  .delete(authenticate.verifyAdmin, (req, res, next) => {
    res.end("Deleting all partners");
  });

module.exports = partnerRouter;
