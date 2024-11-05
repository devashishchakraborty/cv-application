import { useState } from 'react';
import '../styles/App.css';
import CVEditor from './CVEditor';
import CVPreview from './CVPreview';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullname: "John Doe",
    number: "1234567890",
    email: "example@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/examplename",
    website: "https://example.com",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsam rem voluptatum cupiditate quibusdam accusamus molestias, eaque delectus incidunt maxime excepturi eligendi quaerat, nobis dignissimos, possimus unde at aliquid ea."
  })

  const [skills, setSkills] = useState({
    languages: "Javascript, Python, SQL, C/C++, HTML/CSS",
    frameworks: "ReactJS, Flask, Pandas, NumPy, Matplotlib",
    tools: "Git, Linux, Jupyter Notebook, DBeaver, VS Code",
    certifications: "TheOdinProject, Andrew Ng's ML Course, Python for Everybody Coursera"
  })

  const [experience, setExperience] = useState([{
    id: uuidv4(),
    companyName: "Microhard",
    role: "Python Intern",
    location: "New York",
    startMonth: "January",
    startYear: "2023",
    endMonth: "June",
    endYear: "2024",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad dolorum voluptates aut, neque error eum adipisci mollitia debitis recusandae, sunt cupiditate illum quod quis voluptate tempora veniam omnis? Ratione!"
  }])

  const [projects, setProjects] = useState([{
    id: uuidv4(),
    name: "Example Project",
    technologiesUsed: "Javascript, SQL, CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis magnam quos totam maxime debitis repellendus esse corporis libero, sed id expedita! Accusamus sequi repellendus quam velit necessitatibus, recusandae harum."
  }])
  
  const [education, setEducation] = useState([{
    id: uuidv4(),
      institutionName:"American University",
      programmeName:"Masters in Computer Science",
      location:"California",
      startMonth:"June",
      startYear:"2023",
      endMonth:"Nov",
      endYear:"2024",
  }])
  

  return (
    <>
      <header>
        <div className='title'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><rect width="20" height="20" fill="none"/><g fill="currentColor"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"/><path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clip-rule="evenodd"/></g></svg>
          CV Application
        </div>
        <a href="https://github.com/devashishchakraborty/cv-application" className=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
        </a>
      </header>
      <main>
        <CVEditor 
          generalInfo={generalInfo}
          skills={skills}
          experience={experience}
          projects={projects}
          education={education}
          setGeneralInfo={setGeneralInfo}
          setExperience={setExperience}
          setSkills={setSkills}
          setEducation={setEducation}
          setProjects={setProjects}
        />
        <CVPreview 
          generalInfo={generalInfo}
          experience={experience}
          projects={projects}
          education={education}
          skills={skills}
        />
      </main>
    </>
  )
}

export default App
