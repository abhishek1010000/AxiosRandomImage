import { useState } from "react";
import "./App.css"
import axios from 'axios'
function App(){
  const [data, setData] = useState([])
  const fetchImage = ()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
      setData(res.data.message)
    }).catch(err => console.log(err))
  }

  return (
    <>
    <h1>Random Image Generation App</h1>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={fetchImage} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Fetch Image
      </button><br />
      {/* {imageUrl && <img src={imageUrl} alt="Random from Unsplash" style={{ marginTop: '20px', maxWidth: '100%' }} />} */}
      <img src={data} alt="" style={{marginTop:'20px', width:'250px', height:'250px'}} />
    </div>
    </>
  )
}

export default App;
