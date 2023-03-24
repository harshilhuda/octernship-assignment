import './Screen1.scss'
import { useState } from 'react'
import {toast} from 'react-toastify'
// import Screen2 from '../Screen2/Screen2'
import { useNavigate } from 'react-router-dom'
function Screen1() {
    let[str,setStr]=useState("")
    str=str.replace(/\s/g, '');
    const navigate=useNavigate()
    const submitHandler=()=>{
        // <Screen2 str={str} />
        if(str==="" || str===" ")
        {
            toast.error("Please do not leave the input blank or with spaces",{
                toastId:1
            })
            return;
        }
        localStorage.setItem('string',JSON.stringify(str))
        localStorage.setItem('string1',JSON.stringify(str))
        navigate('/screen2')
        return
    }
  return (
    <div className="screen1">
        <input type="text" className='inp' onChange={(e)=>setStr(e.target.value)} placeholder='Enter The String' />
        <button className='btn' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Screen1