import React from 'react'
import picture from "../pic/Piture"
import {  Link } from "react-router-dom";

function Album() {
    
   console.log()
    return (
        <div>
            <p>Nghỉ hè</p>
            {picture.map(({id, src, title, description}) =>
             <Link><img key={id} to={`album/${id}`} src={src} title={title}
              alt={description} /></Link>)}
        </div>
    )
}
export default Album