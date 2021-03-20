export const getAPIDomain = () =>
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_HEROKU_DOMAIN
    : window.location.origin
