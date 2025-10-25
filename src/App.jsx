import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
    children: [

      {
        path: "/",
        element: <MainContainer/>,
      },

      {

        path: "watch",
        element: <WatchPage/>
      },
    ]
  },
  ])

  return (
    <>
    <Provider store={appStore}>
   <Head/>

  <div className='pt-16'>
    
  </div>

   <RouterProvider router={appRouter}></RouterProvider>
   </Provider>
   </>
  )
}

export default App
