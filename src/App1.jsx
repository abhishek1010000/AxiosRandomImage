import { useState,useEffect } from "react";
import "./App.css"
import axios from 'axios'
function App1(){
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.post('https://reqres.in/api/users', {
        name: 'Abhishek',
        job: 'leader'
    })
    .then((res)=>{
      console.log(res);
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

export default App1;
