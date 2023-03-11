const express = require("express");
const Promotion = require("../models/promotion");
const authenticate = require("../authenticate");
const cors = require("./cors");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    res.end("Will send all the promotions to you");
  })
  .post(authenticate.verifyAdmin, (req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put(authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete(authenticate.verifyAdmin, (req, res, next) => {
    res.end("Deleting all promotions");
  });

promotionRouter
  .route("/promotionId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get(cors.cors, (req, res, next) => {
    res.end("Will send all the campsites to you");
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      res.end(
        `Will add the promotions: ${req.body.name} with description: ${req.body.description}`
      );
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /promotions");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      res.end("Deleting all promotions");
    }
  );

module.exports = promotionRouter;
