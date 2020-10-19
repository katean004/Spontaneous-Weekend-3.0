const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/user", { target: "http://localhost:8080" }));
  app.use(proxy("/login", { target: "http://localhost:8080" }));
  app.use(proxy("/signup", { target: "http://localhost:8080" }));
  app.use(proxy("/favoriteMovies", { target: "http://localhost:8080" }));
  app.use(proxy("/favoriteFoods", { target: "http://localhost:8080" }));
};
