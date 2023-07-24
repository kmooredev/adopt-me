import { Client } from "../node_modules/@petfinder/petfinder-js";

const pf = new Client({
  apiKey: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
});

export default pf;
