import React from 'react'
import './styles/maped.scss'
const Fav = () => {
    let fake='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoiVnnWu_QbtFist_W7Hbz2V4drhwXDVyiw&usqp=CAU'

    let data:any=localStorage.getItem("fav")||"[]";
    data=JSON.parse(data);

console.log(data)
const removedata=(item:any,i:number)=>{
    let data:any=localStorage.getItem("fav")||"[]";
    data=JSON.parse(data);
    let d:any=document.getElementById(item)
   d.remove()

data.splice(i,1)
data=JSON.stringify(data);
localStorage.setItem("fav",data)
}

  return (
    <div className='card-container'>{
        data.map((elem:any,i:number)=>{
        return <div key={elem.id.toString()} id={elem.id} className="card">
            <div className="imgwrapper">
                <img src={elem.image ? elem.image.original : fake} alt="" />
            </div>
            <h2>
                {elem.name}
            </h2>
            <h3>
                Ratings {elem.rating.average || "not set"}
            </h3>
            <a href={elem.officialSite}>Official Website</a>
            <button onClick={()=>{removedata(elem.id,i)}}>
                Remove From Favorite
            </button>
        </div>
        })
        }</div>
  )
}

export default Fav