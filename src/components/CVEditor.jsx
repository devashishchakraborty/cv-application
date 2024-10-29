import { useState } from 'react'
import '../styles/CVEditor.css'
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

const populateYears = () => {
  // Get the current year as a number
  const date = new Date();
  const currentYear = date.getFullYear();
  const years = [];

  // Make this year, and the 100 years before it available in the year <select>
  for (let i = 0; i <= 50; i++) years.push(<option key={i}>{currentYear - i}</option>)
  return years;
}

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

  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([])
  const [education, setEducation] = useState([])


  function handleGeneralInfoChange(e) {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }))
  }

  function handleSkillsChange(e) {
    const { name, value } = e.target;
    setSkills((prev) => ({ ...prev, [name]: value }))
  }

  function handleExperienceSubmit(newJob, submissionType) {
    setExperience((prev) => {
      if (submissionType === "Edit") {
        return prev.map(job => (job.id === newJob.id ? newJob : job))
      } else return [...prev, newJob]
    })
  }

  function handleEducationSubmit(newEducation, submissionType) {
    setEducation((prev) => {
      if (submissionType === "Edit") {
        return prev.map(education => (education.id === newEducation.id ? newEducation : education))
      } else return [...prev, newEducation]
    })
  }

  function handleProjectsSubmit(newProject, submissionType) {
    setProjects((prev) => {
      if (submissionType === "Edit") {
        return prev.map(project => (project.id === newProject.id ? newProject : project))
      } else return [...prev, newProject]
    })
  }

  return (
    <>
      <div className="cvEditor">
        <GeneralInfo generalInfoItems={generalInfo} handleChange={handleGeneralInfoChange} />
        <Skills skillsItems={skills} handleChange={handleSkillsChange} />
        <Experience activeForm={activeForm} setActiveForm={setActiveForm} experienceList={experience} onSubmit={handleExperienceSubmit} />
        <Projects activeForm={activeForm} setActiveForm={setActiveForm} projectsList={projects} onSubmit={handleProjectsSubmit} />
        <Education activeForm={activeForm} setActiveForm={setActiveForm} educationList={education} onSubmit={handleEducationSubmit} />
      </div>
    </>
  )
}


export { CVEditor, populateYears }