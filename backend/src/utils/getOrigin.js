const getOrigin = () =>
  process.env.NODE_ENV === 'production'
    ? process.env.DOMAIN
    : 'http://localhost'

module.exports = { getOrigin }
