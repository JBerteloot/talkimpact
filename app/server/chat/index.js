function init(io) {
  let users = []

  function logout(id) {
    users = users.filter(user => user.id !== id)
  }

  io.on('connection', function (socket) {
    socket.on('login', username => {
      users.push({
        username: username,
        id: socket.id
      })

      io.emit('new user', user)
    })

    socket.on('logout', () => {
      logout(socket.id)
    })

    //user is disconnected when clicking logout or closing the browser
    socket.on('disconnect', () => {
      logout(socket.id)
    })
  })
}

module.exports = init