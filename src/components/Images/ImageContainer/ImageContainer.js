import React from "react";
import './ImageContainer.scss';

export default function ImageContainer({ props }) {

    const onImageClick = (imgID) => {
        console.log(`Clicked on Image with ID: ${imgID}`)
    }

    return (
        <div className="Image-Container">
            <h3>{props.title}</h3>
            <img src={props.path} alt={props.alt} onClick={() => onImageClick(props.id)} />
        </div>
    );
}
