const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler
  },
  {
    method: 'GET',
    path: '/users/{Id}',
    handler: handler.getUserByIdHandler
  }
]

module.exports = routes
