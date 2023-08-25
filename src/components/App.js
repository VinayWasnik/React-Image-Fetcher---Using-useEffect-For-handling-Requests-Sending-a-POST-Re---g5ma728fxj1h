import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [input,setInput]= useState('');
  const [isLoading,setIsLoading]= useState(false);
  const [data,setData]= useState({});
  async function getData(){
    const resp= await fetch(`https://jsonplaceholder.typicode.com/photos/${input}`);
    const data= await resp.json()
    setData(data);
    setIsLoading(false);
  }
  useEffect(()=>{
    if(input!='') {
      setIsLoading(true);
      getData();
    }
  },[input])
  return (
    <div className='main'>
      <label>Id number</label>
      <input type='number' value={input} onChange={(e)=>setInput(e.target.value)}/>
      {isLoading && <Loader/>}
      {input && !isLoading && <PhotoFrame data={data} />}
    </div>
  )
}


export default App;
