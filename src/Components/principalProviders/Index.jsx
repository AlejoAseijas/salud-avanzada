import React from 'react';
import doctoredLogo from "../../assets/providers/doctored-logo.jpeg"
import premedicLogo from "../../assets/providers/premedic-logo.jpeg"
import sancorsaludLogo from "../../assets/providers/sancorsalud-logo.jpeg"
import galenoLogo from "../../assets/providers/galeno-logo.jpeg"
import "./style.scss"
function Index() {
  return <div id="providers-container">
   <h3 className='text-center'>Nuestros Principales Prestadores</h3>
     <div className='gallery'>
     <img src={doctoredLogo} alt="logo"/>
      <img src={premedicLogo} alt="logo"/>
      <img src={sancorsaludLogo} alt="logo"/>
      <img src={galenoLogo} alt="logo"/>
     </div>
  </div>;
}

export default Index;
