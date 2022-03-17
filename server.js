const express = require('express');
const path = require('path');
const util = require('util');
const app = express();

/**
 * Listener port for the application.
 *
 * @type {number}
 */
const port = 9000;

/**
 * Identifies requests from clients that use http(unsecure) and
 * redirects them to the corresponding https(secure) end point.
 *
 * Identification of protocol is based on the value of non
 * standard http header 'X-Forwarded-Proto', which is set by
 * the proxy(in our case AWS ELB).
 * - when the header is undefined, it is a request sent by
 * the ELB health check.
 * - when the header is 'http' the request needs to be redirected
 * - when the header is 'https' the request is served.
 *
 * @param req the request object
 * @param res the response object
 * @param next the next middleware in chain
 */
const redirectionFilter = function (req, res, next) {
  const theDate = new Date();
  const receivedUrl = `${req.protocol}:\/\/${req.hostname}:${port}${req.url}`;

  if (req.get('X-Forwarded-Proto') === 'http') {
    const redirectTo = `https:\/\/${req.hostname}${req.url}`;
    console.log(`${theDate} Redirecting ${receivedUrl} --> ${redirectTo}`);
    res.redirect(301, redirectTo);
  } else {
    next();
  }
};

/**
 * Apply redirection filter to all requests
 */
app.get('/*', redirectionFilter);

/**
 * Serve the static assets from 'build' directory
 */
app.use(express.static(path.join(__dirname, 'build')));

/**
 * When the static content for a request is not found,
 * serve 'index.html'. This case arises for Single Page
 * Applications.
 */
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


console.log(`Server listening on ${port}...`);
app.listen(port);