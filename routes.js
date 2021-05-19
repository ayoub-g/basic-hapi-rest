import { getAllQuotes } from "./quotes.js";
const { quotes } = await getAllQuotes();

export const routes = [
  {
    method: "GET",
    path: "/",
    /**
     *
     * @returns returns all the quotes
     */
    handler: (req, reply) => {
      return quotes;
    },
  },
  {
    method: "GET",
    path: "/{id}",
    /**
     *
     * @returns a single quote, if id is not a number return the first quote ,
     * if id is too big return the last quote
     */
    handler: (req, reply) => {
      console.log(req.params.id);
      let id = req.params.id ? parseInt(req.params.id, 10) : 0;
      let quote = isNaN(id)
        ? quotes[0]
        : id < quotes.length
        ? quotes[id]
        : quotes[quotes.length - 1];

      return {
        quote,
      };
    },
  },
];
