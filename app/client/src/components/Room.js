import React from 'react'
import {logout} from '../actions/auth.actions'

export default props => {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={logout}>Log out</button>
    </div>
  )
}