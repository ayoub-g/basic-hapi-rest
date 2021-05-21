"use strict";
import hapi from "@hapi/hapi";
import { routes } from "./routes.js";
const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost";
const init = async () => {
  const server = hapi.server({
    port,
    host,
    routes: {
      cors: {
        origin: ["*"], 
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log("server running on port", port);
};
init();
