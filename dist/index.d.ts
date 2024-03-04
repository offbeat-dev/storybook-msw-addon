import { HttpHandler } from 'msw';
import { SetupWorker } from 'msw/browser';

type SetupApi = SetupWorker;
type InitializeOptions = Parameters<SetupWorker["start"]>[0];
type MswParameters = {
    msw?: {
        handlers: HttpHandler[];
        originalResponses: Record<string, any>;
    };
};
type Context = {
    parameters: MswParameters;
    viewMode: string;
    args: Record<string, any>;
    allArgs: Record<string, any>;
    initialArgs: Record<string, any>;
};
declare const initialize: (options?: InitializeOptions) => Promise<void>;
declare function getWorker(): SetupWorker;
declare const mswLoader: (context: Context) => Promise<{}>;

export { InitializeOptions, MswParameters, SetupApi, getWorker, initialize, mswLoader };
