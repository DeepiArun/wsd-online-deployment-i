import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response("Hello world!");
};

serve(handleRequest, { port: 7777 });import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response("Hello world and HI!");
};

serve(handleRequest, { port: 7777 });