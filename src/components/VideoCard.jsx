import React from 'react'

const VideoCard = ({info}) => {

    // console.log(info);
    const {snippet, statistics} = info;

    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;

  return (
    <div className='p-2 m-2 w-65 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'></img>

      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard
