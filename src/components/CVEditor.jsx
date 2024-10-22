import { useState } from 'react'
import '../styles/CVEditor.css'

export default function CVEditor(){
  const showAddItemForm = (e) => {
    const form = e.currentTarget.parentElement.nextElementSibling;
    form.style.display = "grid";
  }
  return (
      <>
      <div className="cvEditor">
        <form className='editGeneralInfo'>
          <fieldset>
            <legend>General Information</legend>
            <input type="text" name="fullname" id="fullname" className="fullname" placeholder='Full Name'/>
            <input type="tel" name="number" id="number" className="number" placeholder='Phone Number'/>
            <input type="email" name="email" id="email" className="email" placeholder='Email'/>
            <input type="url" name="linkedin" id="linkedin" className="linkedin" placeholder='LinkedIn Profile'/>
            <input type="url" name="github" id="github" className="github" placeholder='GitHub Profile'/>
            <input type="url" name="website" id="website" className="website" placeholder='Personal Website'/>
            <textarea name="description" id="description" className='description' rows="4" placeholder='Profile Description' />
          </fieldset>
        </form>

        <div className='editExperience'>
          <div className='sectionHeader'>
            <div className='sectionTitle'>Experience</div>
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
            <button className='submitAddItemBtn'>Submit</button>
            <button className='cancelAddItemBtn'>Cancel</button>
          </form>
        </div>

        <div className='editProjects'>
          <div className="sectionHeader">
            <div className='sectionTitle'>Projects</div>
            <div className='addItemBtn' onClick={(e) => showAddItemForm(e)}>+</div>
          </div>
          <form action="">
              <input type="text" id="name" name="name" className="name" placeholder='Project Name'/>
              <input type="text" id="technologiesUsed" name="technologiesUsed" className="technologiesUsed" placeholder='Tools/Technologies Used'/>
              <textarea name="description" rows="4" id="description" className="description" placeholder='Project Description'></textarea>
            <button className='submitAddItemBtn'>Submit</button>
            <button className='cancelAddItemBtn'>Cancel</button>
          </form>
        </div>

        <div className='editEducation'>
          <div className="sectionHeader">
            <div className='sectionTitle'>Education</div>
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
            <button className='submitAddItemBtn'>Submit</button>
            <button className='cancelAddItemBtn'>Cancel</button>
          </form>
        </div>
        <div className='editSkills'>
          <div className='sectionHeader'>
            <div className='sectionTitle'>Technical Skills</div>
            <div className='addItemBtn' onClick={(e) => showAddItemForm(e)}>+</div>
          </div>
          <form action="">
            <input type="text" name="languages" id="languages" className="languages" placeholder='Languages'/>
            <input type="text" name="frameworks" id="frameworks" className="frameworks" placeholder='Frameworks and Libraries'/>
            <input type="text" name="tools" id="tools" className="tools" placeholder='Development Tools'/>
            <input type="text" name="certifications" id="certifications" className="certifications" placeholder='Courses and Certificates'/>
            <button className='submitAddItemBtn'>Submit</button>
            <button className='cancelAddItemBtn'>Cancel</button>
          </form>
        </div>
      </div>
      </>
  )
}