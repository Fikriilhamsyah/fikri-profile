import React from 'react'
import {projects} from '../constants'

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span></h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!</p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className="block-container w-[350px] h-[400px]">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex flex-col justify-center items-center">
              <img src={project.iconUrl} alt={project.name} className="w-full h-1/2 object-cover rounded-t-xl" />
              <h3 className="text-black text-xl font-poppins font-semibold mt-4">{project.name}</h3>
              <p className="text-black-500 font-nomal pl-1 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
