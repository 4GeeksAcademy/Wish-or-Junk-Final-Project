import React from 'react'
import { Camera } from "react-camera-pro";
import { useState, useRef } from 'react';

export const Viewfinder = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);

    return (
        <div className='card mx-auto' style={{height:"30rem", width:"30rem"}}>
            <Camera ref={camera} />
            <button onClick={() => setImage(camera.current.takePhoto())}></button>
            <img src={image} alt='Taken photo' />
        </div>
    )
}
