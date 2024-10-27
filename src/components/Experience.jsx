import { useState } from "react";
import "../styles/Experience.css"
import { populateYears } from "./CVEditor";

function Experience({ activeForm, setActiveForm, experienceList, onSubmit }){
  const [newExperience, setNewExperience] = useState({
    company:"",
    role:"",
    location:"",
    startMonth:"",
    startYear:"",
    endMonth:"",
    endYear:"",
    EndDate:"",
    description:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setNewExperience((prev) => ({...prev, [name]:value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(newExperience)
    setNewExperience({
      company:"",
      role:"",
      location:"",
      startMonth:"",
      startYear:"",
      endMonth:"",
      endYear:"",
      EndDate:"",
      description:""
    })
  }


  return (
      <div className='editExperience'>
      <div className='sectionHeader'>
        <div className='sectionTitle'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"/></svg>            
        Experience
          </div>
        <div className='addItemBtn' onClick={() => setActiveForm("editExperience")}>+</div>
      </div>
      { 
        activeForm == "editExperience" ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="company" id="company" className="company" placeholder='Company Name' value={newExperience.company} onChange={(e)=>handleChange(e)} required/>
            <input type="text" name="role" id="role" className="role" placeholder='Role' value={newExperience.role} onChange={(e)=>handleChange(e)} required/>
            <input type="text" name="location" id="location" className="location" placeholder='Location' value={newExperience.location} onChange={(e)=>handleChange(e)} required/>
            <div className="startDate">
              Start Date:
              <select id="startMonth" name="startMonth" onChange={(e)=>handleChange(e)}>
                <option value="" disabled selected hidden>Month</option>
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
              <select id="startYear" name="startYear" onChange={(e)=>handleChange(e)}>
              <option value="" disabled selected hidden>Year</option>
                { populateYears() }
              </select>
            </div>
            <div className="endDate">
              End Date:
              <select id="endMonth" name="endMonth" onChange={(e)=>handleChange(e)}>
              <option value="" disabled selected hidden>Month</option>
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
              <select id="endYear" name="endYear" onChange={(e)=>handleChange(e)}>
              <option value="" disabled selected hidden>Year</option>
              { populateYears() }
              </select>
            </div>
            <textarea name="description" id="description" rows="4" className='description' placeholder='Description' value={newExperience.description} onChange={(e)=>handleChange(e)} required></textarea>
            <button className='submitAddItemBtn'>Add</button>
            <button className='cancelAddItemBtn' type='reset' onClick={() => setActiveForm("")}>Cancel</button>
        </form>
      ): null}
    </div>
  )
}

export default Experience;