import type {
  RequestHandler,
  HttpResponse,
  HttpRequestHandler,
  GraphQLRequestHandler,
  JsonBodyType,
} from "msw";
import { SetupWorker } from "msw/browser";

declare global {
  interface Window {
    __MSW_STORYBOOK__: {
      worker?: SetupWorker;
      handlers?: RequestHandler[];
      handlersMap?: {
        [key: string]: {
          handler: RequestHandler;
          response: HttpResponse & {
            jsonBodyData?: object;
            status?: number;
            delay?: number;
          };
        };
      };
    };
  }
}
