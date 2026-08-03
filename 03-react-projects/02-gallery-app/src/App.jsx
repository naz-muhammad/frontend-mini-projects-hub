import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  
  const [data , setData] = useState([])
  const [count , setCount] = useState(1)

  // let count = 2;
  

  useEffect(()=> {
    const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${count}&limit=10`)
    // console.log(response.data);
      setData(response.data)
  }

  getData()

  } , [count])



  return (

    <>

    <div className='h-full bg-[#212121] text-white flex gap-4 flex-nowrapwrap justify-center items-center p-4 flex-col-reverse'>

      {
        data.map( ( user , idx ) => {
        
          return <a href={user.url}  key={idx} >
            <div
            className='rounded-xl '
          >
           <img src={user.download_url} 
            className='w-56 h-56 object-cover rounded-2xl'
           />
           <h1 
            className='text-xl font-semibold mt-4'
           >{user.author}</h1>
           
          </div>
          </a>
        })
      }

      <div className='flex gap-4 my-4 '>
          <button
            className='text-lg bg-amber-500 text-black px-6 py-4 rounded-2xl cursor-pointer'
            onClick={ ()=> {
              if ( count > 1 ) {
                setCount(count-1)
              }
              
            }}
           >Prev</button>
           <h3 className='text-xl flex items-center'>{`page ${count}`}</h3>
           <button
            className='text-lg bg-amber-500 text-black px-6 py-4 rounded-2xl '
              onClick={ ()=> {
              setCount((prev)=> prev+1)
            }}
           >Next</button>
      </div>
      
    </div>
    </>
    

  )
}

export default App
