import React ,{ useState } from 'react'
import Fav from './Fav'
import Mapeddata from './Mapeddata'
import About from './About'
import './styles/Home.scss'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {

const [inputvalue,setinput]=useState("")
const [apiinfo,setinfo]=useState([])



const changeinput=(e:any)=>{
setinput(e.target.value)
}

const Search=()=>{
let api="https://api.tvmaze.com/search/shows?q="+inputvalue;
fetch(api).then(r=>r.json()).then(res=> setinfo(res))
}

  return (
    <div className='main'>
      
      <Routes>
        <Route path="/" element={
          <>
          <div className="searchbar">
       <input type="text" placeholder='Search Here...' value={inputvalue} onChange={(e)=> changeinput(e)} />
       <button onClick={()=>Search()}>
         Search
       </button>
     </div>
     <Mapeddata api={apiinfo} />
          </>
        }>
          
        </Route>
        <Route path="fav" element={ <Fav />} />
          <Route path="about" element={ <About/>} />
      </Routes>
     
      
     
     
    </div>
  )
}

export default Home