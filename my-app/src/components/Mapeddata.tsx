import React from 'react'
import './styles/maped.scss'
const Mapeddata = (props:any) => {
    
let fake='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoiVnnWu_QbtFist_W7Hbz2V4drhwXDVyiw&usqp=CAU'
const savetolocal=(local:any)=>{
console.log(local)
}

  return (
    <div className='card-container'>{
        props.api.map((elem:any)=>{
// console.log(elem.show.id)
        return <div key={elem.show.id.toString()} className="card">
            <div className="imgwrapper">
                <img src={elem.show.image ? elem.show.image.original : fake} alt="" />
            </div>
            <h2>
                {elem.show.name}
            </h2>
            <h3>
                Ratings {elem.show.rating.average || "not set"}
            </h3>
            <a href={elem.show.officialSite}>Official Website</a>
            <button onClick={()=>savetolocal(elem.show)}>
                Add to Favorite
            </button>
        </div>
        })
        }</div>
  )
}

export default Mapeddata