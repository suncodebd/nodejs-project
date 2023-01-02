/*
 * Title: Uptime monitoring api
 *Description:
 * Author: Md Minarul islam (suncodebd)
 * Date: 1/2/2023
 *
 */

//  dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create sever
app.createServer = () => {
    const server = http.createServer();
    server.listen(app.config.port, () => {
        console.log(`lisitening to port ${app.config.port}`);
    });
};

// handle Requist Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello world ');
};

// start the server
app.createServer();
