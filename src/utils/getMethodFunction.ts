import { HttpRequestHandler, http } from "msw";

export function getMethodFunction(method: string | RegExp): HttpRequestHandler {
  switch (method) {
    case "GET":
      return http.get;
    case "POST":
      return http.post;
    case "PUT":
      return http.put;
    case "DELETE":
      return http.delete;
    case "PATCH":
      return http.patch;
    case "HEAD":
      return http.head;
    case "OPTIONS":
      return http.options;
    default:
      return http.get;
  }
}
