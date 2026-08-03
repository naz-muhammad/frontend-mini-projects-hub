import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data , setData] = useState([])

  useEffect(()=> {
    const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10')
    // console.log(response.data);
      setData(response.data)
  }

  getData()

  } , [])

  console.log(data);
  

  return (

    <div className='h-full bg-neutral-50 text-white flex gap-4 flex-wrap justify-center p-8'>

      {
        data.map( ( user , idx ) => {
          return <div key={idx} 
            className='rounded-xl '
          >
           <img src={user.download_url} 
            className='w-56 h-56 object-cover rounded-2xl'
           />
           <h1 
            className='text-xl font-semibold mt-4'
           >{user.author}</h1>
           
          </div>
        })
      }

      <div className='flex gap-4 mb-4'>
          <button
            className='text-lg bg-amber-500 text-black px-6 py-4 rounded-2xl'
           >Prev</button>
           <button
            className='text-lg bg-amber-500 text-black px-6 py-4 rounded-2xl'
           >Next</button>
      </div>
      
    </div>

  )
}

export default App
