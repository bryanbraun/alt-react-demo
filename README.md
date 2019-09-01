# Alt React Demo

This app demonstrates a React-like application with all of the tooling complexity removed. No transpiling, no build steps, and no dependencies.

To do this, we lean on JavaScript features like ES6 modules, template strings, and classes. These features have surprisingly good browser support today, which wasn't the case when React was first created.

There's practically no framework here. There's about 50 lines of JS defining a simple setState function, and a pub/sub system for re-rendering components. Everything else is application code, following React's conventions.

The demo app is a Password Generator. See it here: [https://bryanbraun.com/alt-react-demo](https://www.bryanbraun.com/alt-react-demo/)

## Setup

None, lol.

Just [run SimpleHTTPServer](https://2ality.com/2014/06/simple-http-server.html) to serve your files:

```
python -m SimpleHTTPServer
```
