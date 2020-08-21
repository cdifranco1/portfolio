import React, { useState } from "react"
import linkedin from "./assets/linkedin.png"
import githubMark from "./assets/GitHub-Mark-32px.png"

const projects = [
  {
    name: "ValU",
    description: "Full stack web application for developing business enterprise discounted cash flow valuations",
    link: "https://valuation-swart.vercel.app/",
    github: "https://github.com/cdifranco1/valuation-backend",
    tech: ["Node", "Express", "MongoDB", "Mongoose", "React", "Redux", "Tailwind CSS"]
  },
  {
    name: "Miracle Map",
    description: "Member portal for members of Miracle Messages non-profit organization.",
    github: "https://github.com/Lambda-School-Labs/miracle-messages-fe",
    link: "https://production.d3iery6e42ccvf.amplifyapp.com/",
    tech: ["React", "Redux", "Node", "Express", "Sass", "Material UI"]
  },
  {
    name: "John Conway's Game of Life",
    description: "Fun implementation of John Conway's Game of Life simulation",
    github: "https://github.com/cdifranco1/conway-game-of-life",
    link: "https://conway-game-of-life-nine.vercel.app/",
    tech: ["React", "Tailwind CSS"]
  },
  {
    name: "Weather CLI App",
    description: "A command-line interface web-scraping app to pull weather information from google search",
    github: "https://github.com/cdifranco1/weather_cli",
    link: "https://github.com/cdifranco1/weather_cli",
    tech: ["Python"]
  },
  {
    name: "Another To-Do List",
    description: "Full stack web-based to-do list",
    github: "https://github.com/cdifranco1/weather_cli", 
    link: "https://github.com/cdifranco1/weather_cli",
    tech: ["Node", "Express", "Knex", "PostreSQL", "React", "Material UI"]
  },
  {
    name: "Adventure Game",
    description: "Text-based adventure game demonstrating basic object-oriented programming design principles",
    github: "https://github.com/cdifranco1/Python-Adventure-Game",
    link: "https://github.com/cdifranco1/Python-Adventure-Game",
    tech: ["Python"]
  },
]

export const Home = () => 
  <div className="py-10 px-20">
    <div className="flex justify-between items-start">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold">Hello! My name is Charlie DiFranco.</h1>
        <p className="text-lg mt-3 mb-5">
          I left my career as a Valuation Consultant at Deloitte to pursue a career in software development. I'm currently a student at Lambda School, an 8+ month immersive web development and computer science academy.
        </p>
        <div className="my-4">
          <h3 className="text-xl font-semibold mb-2">Skills and Languages:</h3>
          <ul className="flex flex-col flex-wrap list-disc list-inside h-48">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Node</li>
            <li>Express</li>
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Jest</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
            <li>Knex</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
      <div className="relative pb-1/3 w-2/5">
        <img className="absolute w-full h-full object-cover rounded-lg shadow-lg" src={linkedin}/>
      </div>
    </div>
    <div className="flex flex-col mt-8">
      <h2 className="text-3xl font-bold tracking-wide mb-5">Projects</h2>
      {projects.map((el) =>
        <div className="flex justify-between">
          <a href={el.link} className="flex flex-col px-2 py-2 rounded-md hover:bg-blue-100 w-3/4">
            <div>
              <span className="text-lg w-3/12 font-semibold tracking-wide">{el.name}</span>
              <span className="text-lg px-3 text-gray-600">{el.description}</span>
            </div>
            <div className="w-full flex px-1">
              <span className="text-sm">Tech Stack:</span>
              {el.tech.map(el => <span className="px-2 text-gray-500 text-sm">{el}</span>)}
            </div>
          </a>
          <a className="block relative" href={el.github}>
            <img src={githubMark} />
          </a>
        </div>
      )}
    </div>
  </div>
