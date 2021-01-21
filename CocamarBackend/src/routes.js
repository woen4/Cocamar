const { Router } = require("express");
const ClassifierController = require("./Controllers/ClassifierController");
const routes = Router();
/*
function authorize(req, res, next) {
  const token = req.headers.authorization;
  if (token === "d3a8cb9695e6f3bb1d8d03211b29de02") {
    return next();
  }
  res.status(401).json({ error: "unauthorized operation" });
}
routes.use(authorize);
*/

routes.post("/classify-image", ClassifierController.classify);

module.exports = routes;
