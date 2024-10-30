import { useState } from 'react'
import '../styles/CVEditor.css'
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';


function CVEditor() {
  const [activeForm, setActiveForm] = useState("")
  const [generalInfo, setGeneralInfo] = useState({
    fullname: "",
    number: "",
    email: "",
    linkedin: "",
    github: "",
    website: "",
    description: ""
  })

  const [skills, setSkills] = useState({
    languages: "",
    frameworks: "",
    tools: "",
    certifications: ""
  })

  // Populating Years for Item submit form
  const PopulateYears = () => {
    // Get the current year as a number
    const date = new Date();
    const currentYear = date.getFullYear();
    const years = [];

    // Make this year, and the 100 years before it available in the year <select>
    for (let i = 0; i <= 50; i++) years.push(<option key={i}>{currentYear - i}</option>)
    return years;
  }


  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([])
  const [education, setEducation] = useState([])

  // Sections involving real time data input
  function handleGeneralInfoChange(e) {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }))
  }

  function handleSkillsChange(e) {
    const { name, value } = e.target;
    setSkills((prev) => ({ ...prev, [name]: value }))
  }

  // Callback function to return updated list after adding new Item
  function updatedList(prev, newItem, submissionType) {
    if (submissionType === "Edit") {
      return prev.map(item => (item.id === newItem.id ? newItem : item))
    } else return [...prev, newItem]
  }

  // Form Submission Handlers
  function handleExperienceSubmit(newJob, submissionType) {
    setExperience((prev) => updatedList(prev, newJob, submissionType))
  }

  function handleEducationSubmit(newEducation, submissionType) {
    setEducation((prev) => updatedList(prev, newEducation, submissionType))
  }

  function handleProjectSubmit(newProject, submissionType) {
    setProjects((prev) => updatedList(prev, newProject, submissionType))
  }

  // handle deletion of items from forms
  function handleExperienceDelete(id) {
    setExperience((prev) => prev.filter((job) => job.id != id))
  }

  function handleEducationDelete(id) {
    setEducation((prev) => prev.filter((education) => education.id != id))
  }

  function handleProjectDelete(id) {
    setProjects((prev) => prev.filter((project) => project.id != id))
  }


  return (
    <>
      <div className="cvEditor">
        <GeneralInfo
          generalInfoItems={generalInfo}
          handleChange={handleGeneralInfoChange}
        />
        
        <Skills 
          skillsItems={skills} 
          handleChange={handleSkillsChange} 
        />

        <Experience 
          activeForm={activeForm} 
          setActiveForm={setActiveForm} 
          experienceList={experience}
          PopulateYears={PopulateYears}
          onSubmit={handleExperienceSubmit}
          onDelete={handleExperienceDelete}
        />

        <Projects 
          activeForm={activeForm} 
          setActiveForm={setActiveForm} 
          projectsList={projects}
          onSubmit={handleProjectSubmit} 
          onDelete={handleProjectDelete}
        />

        <Education 
          activeForm={activeForm} 
          setActiveForm={setActiveForm} 
          educationList={education}
          PopulateYears={PopulateYears}
          onSubmit={handleEducationSubmit} 
          onDelete={handleEducationDelete}
        />
      </div>
    </>
  )
}


export default CVEditor;