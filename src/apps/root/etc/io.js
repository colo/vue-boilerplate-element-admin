'use strict'
// const App = require('node-app-socket.io-client/index')
const App = require('node-app-socket.io-client/wrapper')
import DefaultConn from '@etc/default.io'

// let _app = new App(Object.merge(DefaultConn, { path: '/' }))
// export default _app.io

export default function () {
  if (Array.isArray(DefaultConn)) {
    let ios = []
    Array.each(DefaultConn, function (conn) {
      let _app = new App(Object.merge(conn, { path: '/', type: 'SharedWorker' }))
      // ios.push(_app.io)
      ios.push(_app)
    })

    return ios
  } else {
    let _app = new App(Object.merge(DefaultConn, { path: '/', type: 'SharedWorker' }))
    // return _app.io
    return _app
  }
}
