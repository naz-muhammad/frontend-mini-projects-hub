import React, { useState , useCallback, useEffect, useRef } from 'react'

const App = () => {

  const [password , setPassword] = useState("")
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)

  const passwordGenerator = useCallback(()=>{

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '@#$%^&*()_+-=[]{}|;:,.<>?/'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log(char)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
    

  } , [charAllowed , length , numberAllowed ]) 

  
  useEffect(()=>{
    passwordGenerator()
  },[charAllowed , length , numberAllowed , passwordGenerator])

  function handleCopyPassword() {
    // console.log(window);
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  
  const passwordRef = useRef(null)

  return (
    <>
      <div className='bg-gray-700 p-4 w-full flex flex-col gap-4'>
        <div className='flex justify-between'>
          <input type="text" placeholder='password'
          className='w-full border border-solid border-white rounded-l-lg px-2 py-2'
          ref={passwordRef}
          value={password}
          readOnly
        />
        <button className='border border-solid border-white rounded-r-lg px-2 py-2 bg-blue-600'
          onClick={handleCopyPassword}
        >Copy</button>
        </div>

        <div  className='flex gap-4'>
          <div className='flex gap-1'>
            <input type="range" 
              min={8}
              max={100}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
             />
            <label >Length : {length}</label>
          </div>
          
          <div className='flex gap-1'>

            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
             />
            <label htmlFor='numberInput'>Numbers</label>

          </div>
          
          <div className='flex gap-1'>

            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='charInput'>Characters</label>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
