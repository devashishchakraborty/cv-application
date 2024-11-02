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

  const [submissionType, setSubmissionType] = useState("Add")

  const clearForm = () => {
    setNewProject((prev) => ({
      ...prev, 
      name: "",
      technologiesUsed: "",
      description: ""
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({...prev, [name]:value }))
  }

  const handleClear = () => {
    setActiveForm("");
    clearForm();
  }

  const handleSubmit = (e) => {
    setActiveForm("");
    e.preventDefault();
    clearForm();
    onSubmit(newProject, submissionType);
  }

  const handleAddItem = (form) => {
    setSubmissionType("Add");
    clearForm();
    setActiveForm("editProjects");
  }

  const handleEditItem = (id) => {
    setSubmissionType("Edit");
    const projectToEdit = projectsList.find(project => project.id === id)
    setNewProject(projectToEdit);
    setActiveForm("editProjects");
  }


  return (
    <div className='editProjects'>
      <div className="sectionHeader">
        <div className='sectionTitle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><rect width="16" height="16" fill="none" /><path fill="currentColor" d="M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75M6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" /><path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z" /></svg>
          Projects
        </div>
        <div className='addItemBtn' onClick={() => handleAddItem()}>+</div>
      </div>

      {
        activeForm === "editProjects" ? (
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              id="name"
              name="name"
              className="name"
              placeholder="Project Name"
              value={newProject.name}
              onChange={(e) => handleChange(e)}
              required
            />
            
            <input
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              className="technologiesUsed"
              placeholder="Tools/Technologies Used"
              value={newProject.technologiesUsed}
              onChange={(e) => handleChange(e)}
              required
            />
            
            <textarea
              name="description"
              rows="4"
              id="description"
              className="description"
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => handleChange(e)}
              required
            ></textarea>
            <button className='submitAddItemBtn' type="submit">{submissionType}</button>
            <button className='cancelAddItemBtn' type='reset' onClick={handleClear}>Cancel</button>
          </form>
        ) : (projectsList.length > 0 ? (
          <div className="projectsList">
            {
              projectsList.map((project) => {
                return (
                  <div className="projectDetails">&#9679;
                    <div className="items">
                      <div className="name">{project.name}</div>|
                      <div className="technologiesUsed"><i>{project.technologiesUsed}</i></div>
                    </div>
                    <div className="editBtn" onClick={() => handleEditItem(project.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg></div>
                    <div className="deleteBtn" onClick={() => onDelete(project.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></div>

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