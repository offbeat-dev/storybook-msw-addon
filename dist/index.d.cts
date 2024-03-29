import { R } from './HttpResponse-vQNlixkj.js';

interface UnhandledRequestPrint {
    warning(): void;
    error(): void;
}
type UnhandledRequestCallback = (request: Request, print: UnhandledRequestPrint) => void;
type UnhandledRequestStrategy = 'bypass' | 'warn' | 'error' | UnhandledRequestCallback;

interface SharedOptions {
    /**
     * Specifies how to react to a request that has no corresponding
     * request handler. Warns on unhandled requests by default.
     *
     * @example worker.start({ onUnhandledRequest: 'bypass' })
     * @example worker.start({ onUnhandledRequest: 'warn' })
     * @example server.listen({ onUnhandledRequest: 'error' })
     */
    onUnhandledRequest?: UnhandledRequestStrategy;
}

type FindWorker = (scriptUrl: string, mockServiceWorkerUrl: string) => boolean;
interface StartOptions extends SharedOptions {
    /**
     * Service Worker registration options.
     */
    serviceWorker?: {
        /**
         * Custom url to the worker script.
         * @default "/mockServiceWorker.js"
         */
        url?: string;
        options?: RegistrationOptions;
    };
    /**
     * Disables the logging of the intercepted requests
     * into browser's console.
     * @default false
     */
    quiet?: boolean;
    /**
     * Defers any network requests until the Service Worker
     * instance is activated.
     * @default true
     */
    waitUntilReady?: boolean;
    /**
     * A custom lookup function to find a Mock Service Worker in the list
     * of all registered Service Workers on the page.
     */
    findWorker?: FindWorker;
}

type MswParameters = {
    msw?: {
        handlers: R[];
        originalResponses: Record<string, any>;
    };
};
type Context = {
    parameters: MswParameters;
    viewMode: string;
};
declare const initialize: (options?: StartOptions, handlers?: R[]) => Promise<void>;
declare const mswLoader: (context: Context) => Promise<{}>;

export { type MswParameters, initialize, mswLoader };
