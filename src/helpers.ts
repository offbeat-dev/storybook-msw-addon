import { HttpHandler } from "msw";

const SEPARATOR = "__HandlerResponseKeySeparator__";

export const handlerResponseKey = (handler: HttpHandler) => {
  return [handler.info.method, handler.info.path].join(SEPARATOR);
};

export const handlerResponseKeyParts = (key: string) => {
  const [method, path] = key.split(SEPARATOR);

  return { method, path };
};
