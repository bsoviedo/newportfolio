import React from 'react'
import { useMenu } from '../hooks/useMenu'
import { Header } from './Header'

export const FirstSection = () => {

  let {handleMenu, showMenu} = useMenu();


  return (

    <>
            <Header handleMenu={handleMenu} showMenu={showMenu}/>

    <div>
      <img src='' alt='map 1'/> 
    </div>
    <section id='intro'>
      <h1 id='Bienvenida'>¡Bienvenido/a!</h1>
        <p> En esta página (constantemente en construcción) subire distintos proyectos
            que he realizado y realizaré. La idea de esto es crear un repositorio que sea de fácil acceso para poder
            mostrar distintas habilidades en algunas áreas, principalmente de los Sistemas de Información Geográficos
            (SIG),
            del desarrollo web, la programación y la integración de estos en proyectos de desarrollo web sig.

            Si quieres seguir directamente a ver algunos trabajos, por favor da clic <a href='Proyectos.html'>acá </a>
      </p>
     
    </section>
    </>
    )
}
