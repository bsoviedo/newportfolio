import {useState} from 'react'

export const useMenu = () => {
    const [showMenu, setshowMenu] = useState(false)

    const handleMenu= ()=>{
      setshowMenu(!showMenu)
    }

    return {
        handleMenu, showMenu
    }
}

