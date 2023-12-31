import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing')
    const io = new Server({path: '/api/socket', addTrailingSlash: false});
    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler
