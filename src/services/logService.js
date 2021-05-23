import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://10107f46f442419dba13937254dfd81a@o707864.ingest.sentry.io/5778573",
        integrations: [new Integrations.BrowserTracing()],
        environment: "dev",
        release: "1-0-0",
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });

}

function log(error) {
    Sentry.captureMessage(error);
}

export default {
    init: init,
    log: log
}