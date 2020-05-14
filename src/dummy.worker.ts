// @ts-ignore
import wasmInstantiate from "./lib.rs";

wasmInstantiate().then((instance: any) => {
  console.log(instance.exports.add(1, 2)); // 3
});

onmessage = function(e) {
  console.log('WORKER LOGGER', e)
  postMessage('A msg from worker')
}