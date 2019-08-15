import io from 'socket.io-client'

// MUST CHANGE localhost to IP ADDRESS
export const socket = io.connect('http://10.68.0.219:8000')

export default socket