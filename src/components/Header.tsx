import React, { MouseEventHandler, useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Select from 'react-select';
import { useLocation } from 'react-router-dom';


interface HeaderProps{
    handleMenu: MouseEventHandler,
    showMenu: boolean,
}

interface Languages {
    label: any, 
    value: string;
  /*   type: string;
    age: number; */
  }

export const Header = (headerProps:HeaderProps) => {


  let [showMenu, setShowMenu] = useState(headerProps.showMenu )


    const [selectedLanguaje, setselectedLanguaje] = useState('Español')

    const options: Languages[] = [
        { label: 'English', value: 'English'},
        {label: 'Español', value: 'Español'}
      ];
 
    const handleChange = (selectedOption : Languages | null) => {

        console.log(selectedOption)
        //setselectedLanguaje(selectedOption)
      };

   

      

     

    
 
 
    return (
    <header className=' header'>
      <>
          <div className='logo_info'>
            <div className='info'>
              Brayan Oviedo
            </div>
            
          </div>

           {/* <div className='idioma'>
              <p>
              Idioma
              </p> 
              

            <Select
                  onChange={handleChange}
                  options={options}
            /> 
        </div>  */}

        
          <div className='menu'>
          <button className='menubutton' onClick={headerProps.handleMenu} > {headerProps.showMenu?  <GrClose/> :  <GiHamburgerMenu/> } </button>
            <nav className={headerProps.showMenu ? 'showMenu' : 'hideMenu'} >
              <ul>
                <li> <a href='#index' > Inicio </a>  </li>
                <li> <a href='#projects'> Proyectos </a>  </li>
                <li> <a href='#academics'> Trayectoria academica </a>  </li>

              {/*    <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                  <li><a href="#">Item 4</a></li>
                  <li><a href="#">Item 5</a></li> */}
              </ul>
              </nav>
          </div>
        </>
      </header>
  )
}
