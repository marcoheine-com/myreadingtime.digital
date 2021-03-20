export const getAPIDomain = () =>
  process.env.NODE_ENV === 'development'
    ? process.env.HEROKU_APP_DOMAIN
    : window.location.origin
