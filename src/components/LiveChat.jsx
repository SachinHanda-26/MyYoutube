// import React, { useEffect, useState } from 'react'
// import ChatMessage from './ChatMessage'
// import { useDispatch, useSelector } from 'react-redux';
// import { addMessage } from '../utils/chatSlice';
// import { makeid, randomNameGenerate } from '../utils/constants';
// import { Form } from 'react-router-dom';

// const LiveChat = () => {

//     const [sendMessage, setSendMessage] = useState("");

// const Messages = useSelector((store) => store.chat.message);
// const dispatch = useDispatch();



//     useEffect(()=>{

// const i = setInterval(()=> {

//     dispatch(addMessage({
//         name: randomNameGenerate(),
//         message: makeid(20),
//     }))
// }, 1500);

// return () => clearInterval(i);

//     },[]);

//   return (
//     <>
    
//     <h1 className='font-bold text-2xl'>Live Chat</h1>

//     <div className='border border-black h-[400px] p-2 m-1 overflow-y-scroll scroll-smooth'>

//         {
//             Messages.map((msg, i)=> <ChatMessage key={i} name={msg.name} message={msg.message}/>)
//         }
     
//     </div>

//     <form onSubmit={
//         (e)=>{ e.preventDefault()
//     dispatch(addMessage({
//         name: "Sachin",
//         message: sendMessage,
//     }))

//     setSendMessage("");
// }

// } className='border border-black p-3'>
//         <input className='w-70 p-2 mr-3 border border-green-300' placeholder='Add your message' value={sendMessage} onChange={(e)=>setSendMessage(e.target.value)}></input>
//         <button className='bg-green-200 px-3 py-2 rounded-lg cursor-pointer'>Send</button>
//     </form>

//     </>
//   )
// }

// export default LiveChat



import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { makeid, randomNameGenerate } from '../utils/constants';

const LiveChat = () => {
  const [sendMessage, setSendMessage] = useState("");
  const Messages = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  const chatContainerRef = useRef(null);

  // Auto-generate random messages
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerate(),
          message: makeid(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [Messages]);

  return (
    <>
      <h1 className="font-bold text-2xl">Live Chat</h1>

      {/* Chat Box */}
      <div
        ref={chatContainerRef}
        className="border border-black h-[400px] p-2 m-1 overflow-y-scroll scroll-smooth rounded-md bg-white"
      >
        {Messages.map((msg, i) => (
          <ChatMessage key={i} name={msg.name} message={msg.message} />
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!sendMessage.trim()) return;

          dispatch(
            addMessage({
              name: "Sachin",
              message: sendMessage,
            })
          );

          setSendMessage("");
        }}
        className="border border-black p-3 flex items-center gap-3"
      >
        <input
          className="flex-grow p-2 border border-green-300 rounded-md"
          placeholder="Add your message..."
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-300"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;

