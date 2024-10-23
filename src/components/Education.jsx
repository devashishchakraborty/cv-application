import { useState } from "react";
import { hideAddItemForm, showAddItemForm } from "./CVEditor";
import "../styles/Education.css"


function Education(){
    return (
        <div className='editEducation'>
        <div className="sectionHeader">
          <div className='sectionTitle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
            Education
            </div>
          <div className='addItemBtn' onClick={(e) => showAddItemForm(e)}>+</div>
        </div>
        <form action="">
          <input type="text" id="institutionName" name="institutionName" className="institutionName" placeholder='Institution Name'/>
          <input type="text" id="programmeName" name="programmeName" className="programmeName" placeholder='Programme Name'/>
          <input type="text" name="location" id="location" className="location" placeholder='Location'/>
          <div>
            <label htmlFor="startDate">Start Date: </label>
            <input type="date" name="startDate" id="startDate" className="startDate"/>
          </div>
          <div>
            <label htmlFor="endDate">End Date: </label>
            <input type="date" name="endDate" id="endDate" className="endDate"/>
          </div>
          <button className='submitAddItemBtn'>Add</button>
          <button className='cancelAddItemBtn' type='reset' onClick={(e) => hideAddItemForm(e)}>Cancel</button>
        </form>
      </div>
    
    )
}

export default Education;