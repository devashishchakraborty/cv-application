import { useState } from 'react'
import '../styles/CVEditor.css'
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

const showAddItemForm = (e) => {
  const form = e.currentTarget.parentElement.nextElementSibling;
  form.style.display = "grid";
}

const hideAddItemForm = (e) => {
  const form = e.currentTarget.parentElement;
  form.style.display = "none";
}


function CVEditor(){
  return (
      <>
      <div className="cvEditor">
        <GeneralInfo />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </div>
      </>
  )
}

export {showAddItemForm, hideAddItemForm, CVEditor}