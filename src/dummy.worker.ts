// import * as wasm from './pkg'
//
// wasm.greet()

onmessage = function(e) {
  console.log('WORKER LOGGER', e)
  postMessage('A msg from worker')
}