import { useState } from "react";
import "../styles/Projects.css"


function Projects({ activeForm, setActiveForm }){
    return (
        <div className='editProjects'>
          <div className="sectionHeader">
            <div className='sectionTitle'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><rect width="16" height="16" fill="none"/><path fill="currentColor" d="M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75M6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"/><path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z"/></svg>
                Projects
            </div>
            <div className='addItemBtn' onClick={() => setActiveForm("editProjects")}>+</div>
          </div>

          {
            activeForm === "editProjects" ? (
              <form action="">
                <input type="text" id="name" name="name" className="name" placeholder='Project Name'/>
                <input type="text" id="technologiesUsed" name="technologiesUsed" className="technologiesUsed" placeholder='Tools/Technologies Used'/>
                <textarea name="description" rows="4" id="description" className="description" placeholder='Project Description'></textarea>
                <button className='submitAddItemBtn'>Add</button>
                <button className='cancelAddItemBtn' type='reset' onClick={() => setActiveForm("")}>Cancel</button>
              </form>
            ) : null
          }
        </div>
    )
}

export default Projects;