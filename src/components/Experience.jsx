import { useState } from "react";
import "../styles/Experience.css"
import { v4 as uuidv4 } from 'uuid';

function Experience({ activeForm, setActiveForm, experienceList, PopulateYears, onSubmit, onDelete }){
  const [newExperience, setNewExperience] = useState({
    id: uuidv4(),
    companyName:"",
    role:"",
    location:"",
    startMonth:"",
    startYear:"",
    endMonth:"",
    endYear:"",
    description:""
  })

  const [submissionType, setSubmissionType] = useState("Add")

  const clearForm = () => {
    setNewExperience((prev) => ({
      ...prev, 
      companyName:"",
      role:"",
      location:"",
      startMonth:"",
      startYear:"",
      endMonth:"",
      endYear:"",
      description:""
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({...prev, [name]:value }))
  }

  const handleClear = () => {
    setActiveForm("");
    clearForm();
  }

  const handleSubmit = (e) => {
    setActiveForm("");
    e.preventDefault();
    clearForm();
    onSubmit(newExperience, submissionType);
  }

  const handleAddItem = () => {
    setSubmissionType("Add");
    clearForm();
    setActiveForm("editExperience");
  }

  const handleEditItem = (id) => {
    setSubmissionType("Edit");
    const experienceToEdit = experienceList.find(experience => experience.id === id)
    setNewExperience(experienceToEdit);
    setActiveForm("editExperience");
  }


  return (
      <div className='editExperience'>
        <div className='sectionHeader'>
          <div className='sectionTitle'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"/></svg>            
            Experience
          </div>
        <div className='addItemBtn' onClick={() => handleAddItem()}>+</div>
      </div>
      { 
        activeForm == "editExperience" ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="companyName" id="companyName" className="companyName" placeholder='Company Name' value={newExperience.companyName} onChange={(e)=>handleChange(e)} required/>
            <input type="text" name="role" id="role" className="role" placeholder='Role' value={newExperience.role} onChange={(e)=>handleChange(e)} required/>
            <input type="text" name="location" id="location" className="location" placeholder='Location' value={newExperience.location} onChange={(e)=>handleChange(e)} required/>
            <div className="startDate">
              Start Date:
              <select id="startMonth" name="startMonth" defaultValue={newExperience.startMonth.length > 0 ? newExperience.startMonth : "Month"} onChange={(e)=>handleChange(e)} required>
                <option disabled hidden>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select id="startYear" name="startYear" defaultValue={newExperience.startYear.length > 0 ? newExperience.startYear : "Year"} onChange={(e)=>handleChange(e)} required>
                <option disabled hidden>Year</option>
                <PopulateYears />
              </select>
            </div>
            <div className="endDate">
              End Date:
              <select id="endMonth" name="endMonth" defaultValue={newExperience.endMonth.length > 0 ? newExperience.endMonth : "Month"} onChange={(e)=>handleChange(e)} required>
                <option disabled hidden>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select id="endYear" name="endYear" defaultValue={newExperience.endYear.length > 0 ? newExperience.endYear : "Year"} onChange={(e)=>handleChange(e)} required>
                <option disabled hidden>Year</option>
                <PopulateYears />
              </select>
            </div>
            <textarea name="description" id="description" rows="4" className='description' placeholder='Description' value={newExperience.description} onChange={(e)=>handleChange(e)} required></textarea>
            <button className='submitAddItemBtn' type="submit">{submissionType}</button>
            <button className='cancelAddItemBtn' type='reset' onClick={handleClear}>Cancel</button>
        </form>
      ): (experienceList.length > 0 ? (
        <div className="experienceList">
          {
            experienceList.map((experience) => {
              return (
                <div key={experience.id} className="experienceDetails">&#9679;
                  <div className="items">
                    <div className="jobRole">{experience.role}</div>
                    <div className="name">{experience.companyName}</div>
                    <div className="companyLocation">{experience.location}</div>
                  </div>
                  <div className="editBtn" onClick={() => handleEditItem(experience.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg></div>
                  <div className="deleteBtn" onClick={() => onDelete(experience.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></div>
                </div>
              )
            })
          }
        </div>
      ) : null)}
    </div>
  )
}

export default Experience;