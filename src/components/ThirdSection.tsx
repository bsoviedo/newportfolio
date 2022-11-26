import React, {useState, useEffect, useRef} from 'react'
import { useMenu } from '../hooks/useMenu';
import { Header } from './Header'
import { TimeLine } from './sharedComponents/TimeLine';
import {useLocation} from 'react-router-dom'
import { useKeyPress } from '../hooks/useKeyPressed';

export const ThirdSection = () => {

  let {handleMenu, showMenu} = useMenu();

  const [trajectorySection, settrajectorySection] = useState(0)

  let location= useLocation()

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");


  useEffect(() => {

    if(downPress){
      nextStep()
    }
  }, [downPress]);

  useEffect(() => {

    if (upPress) {
      prevStep()
    }

  }, [upPress]);

  
  useEffect(() => {
    settrajectorySection(0)
  }, [location])
  


  const nextStep = ()=>{

    if(trajectorySection == 2){
      return;
    }

    settrajectorySection(trajectorySection + 1)
  }

  const prevStep = ()=>{

    if(trajectorySection == 0){
      return;
    }

    settrajectorySection(trajectorySection - 1)
  }


  return (
    <div>
            <Header handleMenu={handleMenu} showMenu={showMenu}/>


            <div className='timeline_container'>

               {trajectorySection !== 0 &&  <button className='arrowButton upArrow'  onClick={prevStep}>  <i className="arrow up "> </i> </button>}

                <div className='dates_container'>
                  <TimeLine sectionNumber={trajectorySection}/>
                </div>


               {trajectorySection !== 2 &&  <button className="arrowButton downArrow" onClick={nextStep}>  <i className="arrow down "> </i> </button>}


            </div>



    </div>
  )
}
