export const getAPIDomain = () =>
  process.env.NODE_ENV === 'production'
    ? process.env.HEROKU_APP_DOMAIN
    : window.location.origin
