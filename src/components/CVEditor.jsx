import { useState } from 'react'
import '../styles/CVEditor.css'
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';


export default function CVEditor(){

  const [activeForm, setActiveForm] = useState("")
  return (
      <>
      <div className="cvEditor">
        <GeneralInfo />
        <Experience activeForm={activeForm} setActiveForm={setActiveForm}/>
        <Projects activeForm={activeForm} setActiveForm={setActiveForm}/>
        <Education activeForm={activeForm} setActiveForm={setActiveForm}/>
        <Skills activeForm={activeForm} setActiveForm={setActiveForm}/>
      </div>
      </>
  )
}
