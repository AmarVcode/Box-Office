import React ,{ useState } from 'react'
import Mapeddata from './Mapeddata'
import './styles/Home.scss'

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
      <div className="searchbar">
        <input type="text" placeholder='Search Here...' value={inputvalue} onChange={(e)=> changeinput(e)} />
        <button onClick={()=>Search()}>
          Search
        </button>
      </div>
      <Mapeddata api={apiinfo} />
    </div>
  )
}

export default Home