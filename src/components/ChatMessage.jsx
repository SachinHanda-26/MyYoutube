import React from 'react'
import { USER_PROFILE } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center gap-2 mb-2 bg-slate-100'>
      <img className='w-10 h-7 cursor-pointer' src={USER_PROFILE} alt='user profile'></img>
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
