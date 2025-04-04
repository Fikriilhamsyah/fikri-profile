import React from 'react'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Fikri</span></h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Enginering based in Bogor, specializing in technical education through hands-on learing and building application.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12"></div>
      </div>
    </section>
  )
}

export default About
