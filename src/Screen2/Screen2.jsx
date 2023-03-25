import './Screen2.scss'
import Card from '../Card/Card'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Screen2() {
    const navigate=useNavigate()
    const str = localStorage.getItem('string')
    const str1=localStorage.getItem('string1')
    // let count=Array(26).fill(0)
    let ls = str.replace(/"/g, '').split("")
    let unique=(arr)=>{
        const charcount={}
        for(let i=0;i<arr.length;i++)
        {
            const char=arr[i]
            if(charcount[char])
            {
                return false
            }
            else{
                charcount[char]=1
            }
        }
        return true;
    }
    const removeChars = (c, pos) => {
        console.log(ls);
        ls=ls.filter((char,i)=>(
            c!==char || (i===pos && c===char)
            ))
            console.log(ls);
            localStorage.setItem('string',JSON.stringify(ls.join("")))
            // window.location.reload()
            navigate('/screen2')
    }
    useEffect(()=>{
        if(unique(ls)===true)
        {
            toast.success(`All the duplicates are removed. 
            Original String ${str1}.
            Resultant String ${str}.`,{
                toastId:2
            })
        }
    })
    return (
        <div className='screen2'>
            <div className="str">
            <h2>Original String:{str1}</h2>
            <h2>Resultant String:{str}</h2>
            </div>
            <div className="cards">
                {
                    ls.map((c,index) => (
                        <Card key={index} c={c} removeChars={removeChars} index={index} />
                    ))
                }
            </div>
            <div className="goback">
                <h2><Link className='link' to='/'>Go Back to screen 1</Link></h2>
            </div>
        </div>
    )
}

export default Screen2