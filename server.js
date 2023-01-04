var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './public',            // required, the root of the server file tree
    name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
    port: 8080,               // optional, defaults to a random port
    host: '',                // optional, defaults to any interface
    cors: '*',                // optional, defaults to undefined
    followSymlink: true,      // optional, defaults to a 404 error
});

server.start(function () {
    console.log('Server listening to', server.port);
});
