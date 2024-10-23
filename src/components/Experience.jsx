import { useState } from "react";
import { hideAddItemForm, showAddItemForm } from "./CVEditor";
import "../styles/Experience.css"


function Experience(){
    return (
        <div className='editExperience'>
        <div className='sectionHeader'>
          <div className='sectionTitle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"/></svg>            
          Experience
            </div>
          <div className='addItemBtn' onClick={(e) => showAddItemForm(e)}>+</div>
        </div>
        <form>
          <input type="text" name="company" id="company" className="company" placeholder='Company Name'/>
          <input type="text" name="role" id="role" className="role" placeholder='Role'/>
          <input type="text" name="location" id="location" className="location" placeholder='Location'/>
          <div>
            <label htmlFor="startDate">Start Date: </label>
            <input type="date" name="startDate" id="startDate" className="startDate"/>
          </div>
          <div>
            <label htmlFor="endDate">End Date: </label>
            <input type="date" name="endDate" id="endDate" className="endDate"/>
          </div>
          <textarea name="description" id="description" rows="4" className='description' placeholder='Description'></textarea>
          <button className='submitAddItemBtn'>Add</button>
          <button className='cancelAddItemBtn' type='reset' onClick={(e) => hideAddItemForm(e)}>Cancel</button>
        </form>
      </div>
    )
}

export default Experience;