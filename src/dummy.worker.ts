
onmessage = function(e) {
  console.log('WORKER LOGGER', e)
  postMessage('A msg from worker')
}