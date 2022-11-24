import React from 'react'
import { useMenu } from '../hooks/useMenu';
import { Header } from './Header'

export const ThirdSection = () => {

  let {handleMenu, showMenu} = useMenu();

  return (
    <div>
            <Header handleMenu={handleMenu} showMenu={showMenu}/>

ThirdSection</div>
  )
}
