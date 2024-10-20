import { useState } from 'react'
import '../styles/CVEditor.css'


export default function CVEditor(){
    return (
        <>
        <div className="cvEditor">
          <div className='editGeneralInfo'>
            General Information
            <form>
              <div>
                <label htmlFor="fullname">Name: </label>
                <input type="text" name="fullname" id="fullname" className="fullname"/>
              </div>
              <div>
                <label htmlFor="number">Phone Number: </label>
                <input type="tel" name="number" id="number" className="number"/>
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" className="email"/>
              </div>
              <div>
                <label htmlFor="linkedin">LinkedIn Profile: </label>
                <input type="url" name="linkedin" id="linkedin" className="linkedin"/>
              </div>
              <div>
                <label htmlFor="github">GitHub Profile: </label>
                <input type="url" name="github" id="github" className="github"/>
              </div>
              <div>
                <label htmlFor="profile">Profile Description: </label>
                <textarea name="profile" rows="4" cols="50" />
              </div>
            </form>
          </div>

          <div className='editExperience'>
            Experience
            <form>
              <div>
                <label htmlFor="role">Role: </label>
                <input type="text" name="role" id="role" className="role"/>
              </div>
              <div>
                <label htmlFor="company">Company Name: </label>
                <input type="text" name="company" id="company" className="company"/>
              </div>
              <div>
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" className="location"/>
              </div>
              <div>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate" className="startDate"/>
              </div>
              <div>
                <label htmlFor="endDate">End Date: </label>
                <input type="date" name="endDate" id="endDate" className="endDate"/>
              </div>
              <div>
                <label htmlFor="description">What you worked on? </label>
                <textarea name="description" id="description"></textarea>
              </div>
            </form>
          </div>

          <div className='editProjects'>
            Projects
            <form action="">
              <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" className="name"/>
              </div>
              <div>
                <label htmlFor="technologiesUsed">Tools/Technologies Used: </label>
                <input type="text" id="technologiesUsed" name="technologiesUsed" className="technologiesUsed"/>
              </div>
              <div>
                <label htmlFor="description">Description: </label>
                <textarea name="description" id="description" className="description"></textarea>
              </div>
            </form>
          </div>

          <div className='editEducation'>
            Education
            <form action="">
              <div>
                <label htmlFor="institutionName">Institution Name: </label>
                <input type="text" id="institutionName" name="institutionName" className="institutionName"/>
              </div>
              <div>
                <label htmlFor="programmeName">Programme Name: </label>
                <input type="text" id="programmeName" name="programmeName" className="programmeName"/>
              </div>
              <div>
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" className="location"/>
              </div>
              <div>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate" className="startDate"/>
              </div>
              <div>
                <label htmlFor="endDate">End Date: </label>
                <input type="date" name="endDate" id="endDate" className="endDate"/>
              </div>
            </form>
          </div>
          <div className='editSkills'>
            Technical Skills
            <form action="">
              <div>
                <label htmlFor="languages">Languages: </label>
                <input type="text" name="languages" id="languages" className="languages"/>
              </div>
              <div>
                <label htmlFor="frameworks">Frameworks and Libraries: </label>
                <input type="text" name="frameworks" id="frameworks" className="frameworks"/>
              </div>
              <div>
                <label htmlFor="tools">Development Tools: </label>
                <input type="text" name="tools" id="tools" className="tools"/>
              </div>
              <div>
                <label htmlFor="certifications">Courses and Certificates: </label>
                <input type="text" name="certifications" id="certifications" className="certifications"/>
              </div>
            </form>
          </div>
        </div>

        </>
    )
}