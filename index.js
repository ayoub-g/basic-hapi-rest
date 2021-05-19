"use strict";
import hapi from "@hapi/hapi";
import { routes } from "./routes.js";
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const init = async () => {
  const server = hapi.server({
    port,
    host,
  });
  server.route(routes);
  await server.start();
  console.log("server running on port", port);
};
init();
