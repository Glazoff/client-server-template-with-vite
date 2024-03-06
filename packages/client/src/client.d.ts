declare const __SERVER_PORT__: number;

export {};

declare global {
  interface Window {
    __PRELOADED_STATE__?: Record<string, unknown>;
  }
}
