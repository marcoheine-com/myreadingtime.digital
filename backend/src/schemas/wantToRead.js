const findAll = {
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          id: { type: 'string' },
          authors: { type: 'array' },
          thumbnail: { type: 'string' },
          title: { type: 'string' },
        },
      },
    },
  },
}

const replaceOne = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'string' },
      id: { type: 'string' },
      authors: { type: 'array' },
      thumbnail: { type: 'string' },
      title: { type: 'string' },
    },
  },
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
  },
  response: {
    200: {},
  },
}

const deleteOne = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          id: { type: 'string' },
          authors: { type: 'array' },
          thumbnail: { type: 'string' },
          title: { type: 'string' },
        },
      },
    },
  },
}

const health = {
  params: {
    type: 'object',
    properties: {
      healthCheck: { type: 'string' },
    },
  },
}

module.exports = { findAll, replaceOne, deleteOne, health }
