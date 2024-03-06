import type {
  RequestHandler,
  HttpResponse,
  HttpRequestHandler,
  GraphQLRequestHandler,
} from "msw";
import { SetupWorker } from "msw/browser";

declare global {
  interface Window {
    __MSW_STORYBOOK__: {
      worker: SetupWorker;
      handlers: RequestHandler[];

      handlersMap: {
        [key: string]: {
          handler: RequestHandler;
          response: HttpResponse & {
            jsonBodyData?: JSON;
            status?: number;
            delay?: number;
          };
        };
      };
    };
  }
}
