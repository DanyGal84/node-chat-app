const socket = io()

socket.on('message', (message) => {
  console.log(message)
})

document.querySelector('#messageForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.elements.message.value
  socket.emit('sendMessage', input)
})