import React from 'react';
import '../css/ImageList.css';
const Imagelist = (props) =>{
    const images = props.image.map(image => {
    return <img id="se" src={image.urls.regular} alt={image.description} />;
});
return <div className="image">{images}</div>
};



export default Imagelist;