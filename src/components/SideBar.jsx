import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {


    const showMenu = useSelector(store => store.hamstore.isMenuToggle);

  return showMenu && (
    <div className='bg-gray-100 h-screen w-50'>
      
      <h1 className='font-bold text-lg p-2'>Subscriptions</h1>
      <ul>
       <li className='ml-3'>CGC Landran</li>
       <li className='ml-3'>CodeWithHarry</li>
       <li className='ml-3'>Namaste</li>
      </ul>


  <h1 className='font-bold text-lg p-2'>Watch Later</h1>
      <ul>
        <li className='ml-3'>CGC Landran</li>
       <li className='ml-3'>CodeWithHarry</li>
       <li className='ml-3'>Namaste</li>
      </ul>


  <h1 className='font-bold text-lg p-2'>Gaming</h1>
      <ul>
       <li className='ml-3'>CGC Landran</li>
       <li className='ml-3'>CodeWithHarry</li>
       <li className='ml-3'>Namaste</li>
      </ul>

        <h1 className='font-bold text-lg p-2'>Gaming</h1>
      <ul>
       <li className='ml-3'>CGC Landran</li>
       <li className='ml-3'>CodeWithHarry</li>
       <li className='ml-3'>Namaste</li>
      </ul>

        <h1 className='font-bold text-lg p-2'>Gaming</h1>
      <ul>
       <li className='ml-3'>CGC Landran</li>
       <li className='ml-3'>CodeWithHarry</li>
       <li className='ml-3'>Namaste</li>
      </ul>
    </div>
  )
}

export default SideBar
