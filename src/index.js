console.log('main');

const worker = new Worker(new URL('./worker', import.meta.url));
worker.postMessage('hi');
