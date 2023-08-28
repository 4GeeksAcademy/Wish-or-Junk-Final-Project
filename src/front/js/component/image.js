import React from 'react'
import { useState } from "react"

export const Image = () => {
    const [file, setFile] = useState();

    const handleChange = (ev) =>{
        setFile(URL.createObjectURL(ev.target.files[0]));
    }

    return( 
        <div className='card'>
            <input type='file' onChange={handleChange}/>
            <img src={file}/>
        </div>

    );
}