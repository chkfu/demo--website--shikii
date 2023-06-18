// from package
import React from 'react';
// from file
import ImageSection from './ImageSection';
import PersonalDataSection from './PersonalDataSection';
import PasswordSection from './PasswordSection';

// rendering

function PanelContainer({ data }) {
  return (
    <div style={ PanelContainerStyle }>

      <h1 style={ PanelTitleStyle }>
        Account Setting
      </h1>

      <ImageSection data={ data } />
      <PersonalDataSection data={ data } />
      <PasswordSection data={ data } />
    </div>
  );
}

export default PanelContainer;

// styles


const PanelTitleStyle = {
  marginTop: '20px',
  width: '100%',
  display: 'block',
  padding: '20px',
  fontSize: '28px'
};

const PanelContainerStyle = {
  width: '100%',
  height: '100%',
  maxWidth: '500px'
};
