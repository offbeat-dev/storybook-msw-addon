import { RequestHandler } from 'msw';
import { StartOptions } from 'msw/browser';

type MswParameters = {
    msw?: {
        handlers: RequestHandler[];
        originalResponses: Record<string, any>;
    };
};
type Context = {
    parameters: MswParameters;
    viewMode: string;
};
declare const initialize: (options?: StartOptions) => Promise<void>;
declare const mswLoader: (context: Context) => Promise<{}>;

export { MswParameters, initialize, mswLoader };
