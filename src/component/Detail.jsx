import React,{useState} from 'react'
const detail = () => {
  const [first, setfirst] = useState(23)
  return (
    <>
    <h1>{first}</h1>
    <button onClick={()=>setfirst(first+1)}>click me </button>
    </>
  )
}

export default detail