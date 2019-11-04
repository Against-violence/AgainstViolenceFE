//更改用户状态信息
export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else if (user === null) {
    localStorage.setItem('userName', null)
    localStorage.setItem('userToken', '')
    state.currentUser = null
    state.isLogin = false
    state.token = ''
  }
}

export const userToken = (state, userToken) => {
  if (userToken) {
    state.token = userToken
  } else {
    state.token = null
  }
}
/* 
MessageWall模块 
*/
export const receiveMessages = (state, { messages }) => {
  state.messages = messages
}
export const addMessage = (state, { message }) => {
  state.messages.unshift(message)
}
export const increaseStart = state => {
  state.start += 1
}
export const decreaseStart = state => {
  state.start -= 1
}
export const resetStart = state => {
  state.start = 0
}
export const increaseLikes = (state, { messageId, username }) => {
  const message = state.messages.find(message => {
    return message.id === messageId
  })
  message.likes.unshift(username)
}
export const decreaseLikes = (state, { messageId, username }) => {
  const message = state.messages.find(message => {
    return message.id === messageId
  })
  const index = message.likes.findIndex(item => {
    return item === username
  })
  message.likes.splice(index, 1)
}
