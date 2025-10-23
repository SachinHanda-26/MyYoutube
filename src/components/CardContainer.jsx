import React, { useEffect, useRef, useState } from 'react'
import { GOOGLE_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const CardContainer = () => {

  const [video, setVideo] = useState([]);


  useEffect(()=>{
getVideo();
  },[]);

  const getVideo = async()=>{
const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key='+GOOGLE_API_KEY);
const json = await data.json();
// console.log(json.items);
setVideo(json.items);
  }

  return video && (
    <div className='flex flex-wrap'>
     { video.map(vid => <Link to={"/watch?v="+vid.id} key={vid.id}><VideoCard info={vid}/></Link>)}
      
    </div>
  )
}

export default CardContainer
