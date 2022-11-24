import React, {useState} from 'react'

import { FirstSection } from '../components/FirstSection';
import { Header } from '../components/Header';
import { SecondSection } from '../components/SecondSection';
import { ThirdSection } from '../components/ThirdSection';

export const InitPage = () => {

  


  return (
    <>

    <div className='body'>      

     
        <div className='content' id='index'>
          <FirstSection/>
        </div>
        <div className='content' id='projects'>
          <SecondSection/>
        </div>
        <div className='content' id='academics'>
          <ThirdSection/>
        </div>
        <footer className='footer'>
          Contact and enlaces
        </footer>
      </div>
    </>
  )
}
