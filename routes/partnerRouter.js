const express = require("express");
const Partner = require("../models/partner");
const authenticate = require("../authenticate");
const cors = require("./cors");

partnerRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get(cors.cors, (req, res, next) => {
    res.end("Will send all the partners to you");
  });
.post(
  cors.corsWithOptions,
  authenticate.verifyUser,
  authenticate.verifyAdmin,
  (req, res, next) => {
    res.end(
      `Will add the partners: ${req.body.name} with description: ${req.body.description}`
    );
  }
)
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /partners");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      res.end("Deleting all partners");
    }
  );

partnerRouter
  .route("/partnersId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get(cors.cors, (req, res, next) => {
    res.end("Will send all the partners to you");
  });
post(
  cors.corsWithOptions,
  authenticate.verifyUser,
  authenticate.verifyAdmin,
  (req, res, next) => {
    res.end(
      `Will add the partners: ${req.body.name} with description: ${req.body.description}`
    );
  }
)
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /partners");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      res.end("Deleting all partners");
    }
  );

module.exports = partnerRouter;
