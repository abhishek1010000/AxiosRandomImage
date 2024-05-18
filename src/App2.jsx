import { useState,useEffect } from "react";
import "./App.css"
import axios from 'axios'
function App2(){
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
    .then((res)=>{
      setData(res.data.data)
    }).catch(err => console.log(err))
  },[])

  return (
    <>
    <h1>Axios Library in React JS</h1>
      {
        data.map((d,i) =>{
          return <p key={i}>{d.email}</p>
        })
      }
    </>
  )
}

export default App2;
