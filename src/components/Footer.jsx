import React from 'react'
import trainee from '../assets/46688.png'
import sadDeveloper from '../assets/sad-dev.png'
import contrato from '../assets/work.png'
import hired from '../assets/hired.png'
import '../styles/Footer.css'

export const Footer = ({ position, sadDev, victory}) => {

  return (
<footer>
    <div className='ctn-images'>
    <div className='dev' style={{marginLeft: `${position}%`}}>
    
    {sadDev && <img src={sadDeveloper} alt="sadDev" />}
    {!sadDev && !victory && <img src={trainee} alt="dev" />}
    {!sadDev && victory && <img src={hired} alt="dev" />}
    </div>
    <div className='hired'>
      { !victory &&  <img src={contrato} alt="work-image" />}
    </div>
    </div>
    <div className='base'>
    </div>
    </footer>
    )
}
