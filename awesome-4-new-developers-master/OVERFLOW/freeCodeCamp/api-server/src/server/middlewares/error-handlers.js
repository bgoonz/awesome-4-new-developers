// import { inspect } from 'util';
// import _ from 'lodash/fp';
import accepts from 'accepts';

import { unwrapHandledError } from '../utils/create-handled-error.js';
import { getRedirectParams } from '../utils/redirection';

const errTemplate = (error, req) => {
  const { message, stack } = error;
  return `
Error: ${message}
Is authenticated user: ${!!req.user}
Headers: ${JSON.stringify(req.headers, null, 2)}
Original request: ${req.originalMethod} ${req.originalUrl}
Stack: ${stack}

// raw
${JSON.stringify(error, null, 2)}

`;
};

const isDev = process.env.FREECODECAMP_NODE_ENV !== 'production';

export default function prodErrorHandler() {
  // error handling in production.
  // eslint-disable-next-line no-unused-vars
  return function (err, req, res, next) {
    const { origin } = getRedirectParams(req);
    const handled = unwrapHandledError(err);
    // respect handled error status
    let status = handled.status || err.status || res.statusCode;
    if (!handled.status && status < 400) {
      status = 500;
    }
    res.status(status);

    // parse res type
    const accept = accepts(req);
    // prioritise returning json
    const type = accept.type('json', 'html', 'text');

    const redirectTo = handled.redirectTo || `${origin}/`;
    const message =
      handled.message ||
      'Oops! Something went wrong. Please try again in a moment.';

    if (isDev) {
      console.error(errTemplate(err, req));
    }

    if (type === 'json') {
      return res.json({
        type: handled.type || 'errors',
        message
      });
    } else {
      if (typeof req.flash === 'function') {
        req.flash(handled.type || 'danger', message);
      }
      return res.redirectWithFlash(redirectTo);
    }
  };
}
