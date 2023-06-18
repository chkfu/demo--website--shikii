import React, { useRef } from 'react';
import './../userpanel.css';

let uploadImage = "";

// rendering

function ImageSection({ data }) {

  // ref
  const fileRef = useRef();
  const displayRef = useRef();

  return (
    <div style={ ImageSectionStyle }>
      <img
        style={ IconStyle }
        src={ `/images/users/${data.data.data.image}` }
        alt='current user image'
        ref={ displayRef } />
      <input id='custom-file-input' type='file' accept="image/png, image/jpg, image/jpeg" ref={ fileRef }
        onChange={ () => {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            uploadImage = reader.result;
            console.log(uploadImage, reader.result);
            displayRef.current.style.backgroundImage = `url${uploadImage}`;
          });
        } }
      />
    </div>
  );
}

export default ImageSection;



// styles


const Btn01_Style = {
  display: 'block',
  margin: 'auto',
  padding: '8px 14px',
  backgroundColor: '#f59f00',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
};

const ImageSectionStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '20px'
};

const IconStyle = {
  borderRadius: '100%',
  boxShadow: '3',
  width: '200px',
  height: '200px'
};
