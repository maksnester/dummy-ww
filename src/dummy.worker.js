import("./pkg/").then(module => {
  // won't typecheck if yourlib does not expose the run function
  module.greet();
});

onmessage = function(e) {
  console.log('WORKER LOGGER', e)
  postMessage('A msg from worker')
}