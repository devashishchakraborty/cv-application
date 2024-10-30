import { useState } from "react";
import "../styles/Projects.css";
import { v4 as uuidv4 } from 'uuid';


function Projects({ activeForm, setActiveForm, projectsList, onSubmit, onDelete }) {
  const [newProject, setNewProject] = useState({
    id: uuidv4(),
    name: "",
    technologiesUsed: "",
    description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setNewProject((prev) => ({ ...prev, [name]: value }))
  }

  const handleClear = () => {
    setActiveForm("")
    setNewProject({
      name: "",
      technologiesUsed: "",
      description: ""
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newProject);
    setActiveForm("");
    setNewProject({
      name: "",
      technologiesUsed: "",
      description: ""
    })
  }

  return (
    <div className='editProjects'>
      <div className="sectionHeader">
        <div className='sectionTitle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><rect width="16" height="16" fill="none" /><path fill="currentColor" d="M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75M6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" /><path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z" /></svg>
          Projects
        </div>
        <div className='addItemBtn' onClick={() => setActiveForm("editProjects")}>+</div>
      </div>

      {
        activeForm === "editProjects" ? (
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" id="name" name="name" className="name" placeholder='Project Name' onChange={(e) => handleChange(e)} required />
            <input type="text" id="technologiesUsed" name="technologiesUsed" className="technologiesUsed" placeholder='Tools/Technologies Used' onChange={(e) => handleChange(e)} required />
            <textarea name="description" rows="4" id="description" className="description" placeholder='Project Description' onChange={(e) => handleChange(e)} required></textarea>
            <button className='submitAddItemBtn' type="submit">Add</button>
            <button className='cancelAddItemBtn' type='reset' onClick={(e) => handleClear(e)}>Cancel</button>
          </form>
        ) : (projectsList.length > 0 ? (
          <div className="projectsList">
            {
              projectsList.map((project) => {
                return (
                  <div className="projectDetails">
                    <div className="name">{project.name}</div>
                    <div className="technologiesUsed">{project.technologiesUsed}</div>
                    <div className="description">{project.description}</div>
                  </div>
                )
              })
            }
          </div>
        ) : null)
      }
    </div>
  )
}

export default Projects;