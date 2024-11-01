import { useState } from "react";
import "../styles/Education.css"
import { v4 as uuidv4 } from 'uuid';


function Education({ activeForm, setActiveForm, educationList, PopulateYears, onSubmit, onDelete }){
  const [newEducation, setNewEducation] = useState({
    id: uuidv4(),
    institutionName:"",
    programmeName:"",
    location:"",
    startMonth:"",
    startYear:"",
    endMonth:"",
    endYear:"",
  })

  const [submissionType, setSubmissionType] = useState("Add")

  const clearForm = () => {
    setNewEducation((prev) => ({
      ...prev, 
      institutionName:"",
      programmeName:"",
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
    console.log(name, value)
    setNewEducation((prev) => ({...prev, [name]:value }))
  }

  const handleClear = () => {
    setActiveForm("");
    clearForm();
  }

  const handleSubmit = (e) => {
    setActiveForm("");
    e.preventDefault();
    clearForm();
    onSubmit(newEducation, submissionType);
  }

  const handleAddItem = () => {
    setSubmissionType("Add");
    clearForm();
    setActiveForm("editEducation");
  }

  const handleEditItem = (id) => {
    setSubmissionType("Edit");
    const educationToEdit = educationList.find(education => education.id === id)
    setNewEducation(educationToEdit);
    setActiveForm("editEducation");
  }


  return (
      <div className='editEducation'>
      <div className="sectionHeader">
        <div className='sectionTitle'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
          Education
          </div>
        <div className='addItemBtn' onClick={handleAddItem}>+</div>
      </div>
      {
        activeForm === 'editEducation' ? (
          <form onSubmit={handleSubmit}>
          <input type="text" value={newEducation.institutionName} id="institutionName" name="institutionName" className="institutionName" placeholder='Institution Name' onChange={(e)=>handleChange(e)}/>
          <input type="text" value={newEducation.programmeName} id="programmeName" name="programmeName" className="programmeName" placeholder='Programme Name' onChange={(e)=>handleChange(e)}/>
          <input type="text" value={newEducation.location} name="location" id="location" className="location" placeholder='Location' onChange={(e)=>handleChange(e)}/>
          <div className="startDate">
            Start Date:
            <select id="startMonth" name="startMonth" defaultValue={newEducation.startMonth.length > 0 ? newEducation.startMonth : "Month"} onChange={(e)=>handleChange(e)} required>
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
            <select id="startYear" name="startYear" defaultValue={newEducation.startYear.length > 0 ? newEducation.startYear : "Year"} onChange={(e)=>handleChange(e)} required>
              <option disabled hidden>Year</option>
              <PopulateYears />
            </select>
          </div>
          <div className="endDate">
            End Date:
            <select id="endMonth" name="endMonth" defaultValue={newEducation.endMonth.length > 0 ? newEducation.endMonth : "Month"} onChange={(e)=>handleChange(e)} required>
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
            <select id="endYear" name="endYear" defaultValue={newEducation.endYear.length > 0 ? newEducation.endYear : "Year"} onChange={(e)=>handleChange(e)} required>
              <option disabled hidden>Year</option>
              <PopulateYears />
            </select>
          </div>
          <button className='submitAddItemBtn' type="submit">{submissionType}</button>
          <button className='cancelAddItemBtn' type='reset' onClick={handleClear}>Cancel</button>
        </form>  
        ) : (educationList.length > 0 ? (
          <div className="educationList">
            {
              educationList.map((education) => {
                return (
                  <div className="educationDetails">&#9679;
                    <div className="items">
                      <div className="institutionName">{education.institutionName}</div>
                      <div className="programmeName">{education.programmeName}</div>
                      <div className="location">{education.location}</div>
                    </div>
                    <div className="editBtn" onClick={() => handleEditItem(education.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg></div>
                    <div className="deleteBtn" onClick={() => onDelete(education.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></div>
                  </div>
                )
              })
            }
          </div>
        ) : null)}
    </div>
  )
}

export default Education;