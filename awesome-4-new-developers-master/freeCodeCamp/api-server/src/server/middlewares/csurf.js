import csurf from 'csurf';

export const csrfOptions = {
  domain: process.env.COOKIE_DOMAIN || 'localhost',
  sameSite: 'strict',
  secure: process.env.FREECODECAMP_NODE_ENV === 'production'
};

export default function getCsurf() {
  const protection = csurf({
    cookie: csrfOptions
  });
  return function csrf(req, res, next) {
    const { path } = req;
    if (
      // eslint-disable-next-line max-len
      /^\/hooks\/update-paypal$|^\/donate\/charge-stripe$/.test(path)
    ) {
      next();
    } else {
      // add the middleware
      protection(req, res, next);
    }
  };
}
