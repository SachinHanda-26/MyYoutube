import React from 'react'
import { HAMBERG_ICON, USER_PROFILE, YOUTUBE_ICON } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { MenuToggle } from '../utils/SideSlice';

const Head = () => {

  const dispatch = useDispatch();

const CheckMenuToggle = ()=>{
dispatch(MenuToggle());
}

  return (
    <div className='h-15 flex justify-between bg-gray-100 rounded-lg px-3'>
       
       <div className='flex gap-5 h-full items-center'>
        <img className='w-10 h-7 cursor-pointer' src={HAMBERG_ICON} alt='Hamberg icon' onClick={CheckMenuToggle}></img>
        <img className='w-28' src={YOUTUBE_ICON} alt='Youtube icon'></img>
       </div>

       <div className='flex gap-0.5 h-full items-center'>
        <input className='border border-gray-300 w-100 p-2 rounded-l-full' type='text'></input>
        <button className='bg-gray-100 rounded-r-full py-2.5 px-1.5 cursor-pointer'>Search</button>
       </div>

       <div className='flex h-full items-center'>
        <img className='w-10 h-7 cursor-pointer' src={USER_PROFILE} alt='user profile'></img>
       </div>


    </div>
  )
}

export default Head
