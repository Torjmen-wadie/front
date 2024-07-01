import axios from 'axios';
import React, { useState } from 'react'

export default function Home() {
 const [file,setFile]=useState("");
 const[preview,setPreview]=useState();
 
 const handldeChange = (e)=>{
  setFile(e.target.files[0]);
  setPreview(URL.createObjectURL(e.target.files[0]));
 }
 const upload= async()=>{
  const formData = new FormData();
  formData.append('file',file)
  const response = await axios.post('http://localhost:4000/upload',formData);
  console.log("this is response", response.data);
 }
  return (
    <div>
      <h1>Home</h1>
    <iframe src={preview} width="800" height="800"/>
      <input type='file' onChange={handldeChange} />
      <button onClick={upload}>upload</button>
    </div>
  )
}
