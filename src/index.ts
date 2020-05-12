// @ts-ignore
import Worker from './dummy.worker.js'

export const Greeter = (name: string) => `Hello ${name}`;

export function logWorker() {
  const myWorker = new Worker()
  myWorker.onmessage = function(e: any) {
    console.log('Main thread received a msg: ', e.data)
  }
  myWorker.postMessage(['a message from main thread'])
  console.info('msg sent')
}
