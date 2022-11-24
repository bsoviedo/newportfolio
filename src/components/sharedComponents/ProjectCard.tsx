import React from 'react'

interface ProjectsProps {
    title: string, 
    descripcion: string, 
    imgSrc:string,
    tools:Array<ToolsInterface>,
  }

interface ToolsInterface{
    name: string, 
    imgSrc: string
}

export const ProjectCard = (ProjectsCardProps : ProjectsProps) => {


  return (
    <div className='project_card'>

        <h1 className='project_title'> {ProjectsCardProps.title} </h1>

        <div className='project_content'>

            <img src={ProjectsCardProps.imgSrc} alt={`project image`} width="350px"/>

            <p> {ProjectsCardProps.descripcion} </p>

            <div>
                Tecnologias usadas
            </div>


        </div>
    </div>
  )
}
