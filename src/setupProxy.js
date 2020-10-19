const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/login", "/signup", "/user", "/movie", "/restaurant", "/favorites" ], { target: "http://localhost:8080" })
  );
};
