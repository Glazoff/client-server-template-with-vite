export const isServiceWorker = async (pathUrlServiceWorker: string) => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register(pathUrlServiceWorker);
      } catch (event) {
        console.error(`Не получилось включить service-worker из-за: ${event}`);
      }
    });
  } else {
    console.log('Service-worker не работает');
  }
};
