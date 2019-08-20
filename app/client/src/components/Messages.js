import React from 'react'
import {useSelector} from 'react-redux'

export default props => {
  const messages = useSelector(appState => appState.chatReducer.messages).filter(message => message.room = props.room)

  return (
    <div className='messages'>
      {messages.map((message, i) => (
        <div key={'message' + i} className='indimsg'>
          <span className='user'>{message.username}</span>
          <p style={message.style}>{message.text}</p>
        </div>
      ))}
    </div>
  )
}