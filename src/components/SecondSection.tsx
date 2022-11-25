import React ,{useRef, useState} from 'react'
import { useMenu } from '../hooks/useMenu';
import { Header } from './Header';
import { ProjectCard } from './sharedComponents/ProjectCard';
import { projectsData } from '../helpers/ProjectsData';

export const SecondSection = () => {
  let {handleMenu, showMenu} = useMenu();

  const totalProjects= projectsData.length

  const initialStateCarousel = {
    centerItem: [0,1],
    lastItem: totalProjects - 1,
    firstItem: 0, 
  }

  const [projectShow, setProjectShow]  = useState(initialStateCarousel)

  
  const moveProjects = (direction:string)=>{

    if(direction === 'next'){

      if(projectShow.lastItem == projectShow.centerItem[projectShow.centerItem.length - 1]){
        ///Este paso seria si esta en el ultimo lugar y debe reiniciar todo

        setProjectShow(initialStateCarousel)

        return; 
      }

      let moveOneStep = projectShow.centerItem.map(item=> item + 1)

      setProjectShow({...projectShow, 
                         centerItem: moveOneStep
                      })

      return;
    }

    if(projectShow.firstItem == projectShow.centerItem[0]){
       ///Este paso seria si esta en el primer lugar y debe reiniciar todo

       setProjectShow({...projectShow, 
                          centerItem: [totalProjects - 2 , totalProjects - 1], 
                      })

       return;
    }

    let moveOneStepback = projectShow.centerItem.map(item=> item - 1)

    setProjectShow({...projectShow, 
                       centerItem: moveOneStepback, 
                   })

    return;
  

  }


  return (
    <div>
      <Header handleMenu={handleMenu} showMenu={showMenu}/>

        <div className='projects_container'>
          <button onClick={()=>{moveProjects('back')}} className= 'arrowButton leftArrow' > <i className="arrow left"> </i> </button>

          {projectShow.centerItem.map((index)=>{
            return(
              <ProjectCard title={projectsData[index].title} descripcion={projectsData[index].descripcion} 
                           imgSrc={projectsData[index].imgSrc}
                           tools={projectsData[index].tools}
                           key={projectsData[index].title}
                           />
            )
          })}

          <button className= 'arrowButton rigthArrow' onClick={()=>{moveProjects('next')}} > <i className="arrow right"> </i> </button>


        </div>
    </div>
  )
}
