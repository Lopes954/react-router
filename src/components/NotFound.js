import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
  
  const navigate = useNavigate()
  console.log(navigate);
  
  
  
    return (
    <div>
        <h1>Wop, cette pasge n'éxiste pas .</h1>
        <button onClick={()=> navigate ("/")}>retourner a lacceuil</button>
    </div>
  )
}
