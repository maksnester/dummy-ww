# dummy-worker

This is a proof of concept library used to find a way to configure build to achieve inlining of both web worker
and webassembly into library js bundle. This "library" can be used, for example, in your react app
like this:

```jsx
import React from "react";
import { logWorker } from 'dummy-worker'

function App() {
  // creates a web worker which instantiates and uses a wasm module
  logWorker() 
  return <h1>Hello WW and WASM</h1>;
}

export default App;
```

It does nothing but print some messages in console.

* To inline wasm into js as a buffer
    * https://github.com/dflemstr/rust-native-wasm-loader (see also rust setup here)
    * https://github.com/DrSensor/webassembly-loader (does inlining)
* To inline webworker https://github.com/webpack-contrib/worker-loader
