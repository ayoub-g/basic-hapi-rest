import { readFile } from "fs/promises";
export const getAllQuotes = async () => {
  return JSON.parse(await readFile("./quotes.json"));
};
