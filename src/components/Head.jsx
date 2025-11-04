import { useEffect, useState } from 'react'
import { HAMBERG_ICON, USER_PROFILE, YOUTUBE_ICON } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { MenuToggle } from '../utils/SideSlice';
import { cacheResults } from '../utils/searchSlice';
import { filterVideos } from '../utils/videoSlice';

const Head = () => {

  const dispatch = useDispatch();

  const searchCache = useSelector(store => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // const [filteredResults, setFilteredResults] = useState([]);

  useEffect(()=>{

 const timer = setTimeout(()=> {
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  }
  else{
    suggestionFetch();
  }
 }
  ,200) 

   return ()=>{
 
    clearTimeout(timer);
  
   }

  },[searchQuery]);

const suggestionFetch = async()=>{
const data = await fetch("http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="+searchQuery);

const json = await data.json();

setSuggestions(json[1]);
console.log(json[1]);

// update store

dispatch(cacheResults({
  [searchQuery]: json[1],
}))

}


const CheckMenuToggle = ()=>{
dispatch(MenuToggle());
}

const handleClick = ()=>{
  dispatch(filterVideos(searchQuery));
}

  return (
    <div className='h-15 flex justify-between shadow-lg px-3 fixed top-0 w-full z-10 bg-white'>
       
       <div className='flex gap-5 h-full items-center'>
        <img className='w-10 h-7 cursor-pointer' src={HAMBERG_ICON} alt='Hamberg icon' onClick={CheckMenuToggle}></img>
        <img className='w-28' src={YOUTUBE_ICON} alt='Youtube icon'></img>
       </div>

       <div className='pt-2'>
        <input className='border border-gray-300 w-100 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion(false)}></input>

        <button className='bg-gray-100 rounded-r-full py-2.5 px-1.5 cursor-pointer' onClick={handleClick} >Search</button>

{ showSuggestion &&
  (<div className='p-2 fixed bg-white rounded-lg w-97 ml-2 mt-0.5'>
        <ul>
          {
            suggestions.map((s,i)=> <li className='px-2 py-2 hover:bg-gray-100 cursor-pointer' onMouseDown={()=>{
              setSearchQuery(s);
              dispatch(filterVideos(s))
            }} key={i}>{s}</li>)
          }
        
        </ul>
      </div>)
}

       </div>

       <div className='flex h-full items-center'>
        <img className='w-10 h-7 cursor-pointer' src={USER_PROFILE} alt='user profile'></img>
       </div>


    </div>
  )
}

export default Head
