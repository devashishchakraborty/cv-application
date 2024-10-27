import "../styles/GeneralInfo.css"
import { useState } from "react";

function GeneralInfo({ generalInfoItems, handleChange }){  
  return (
      <form className='editGeneralInfo'>
      <fieldset>
        <legend>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>
          General Information
        </legend>
        <input type="text" name="fullname" id="fullname" className="fullname" placeholder='Full Name' value={generalInfoItems.fullname} onChange={handleChange}/>
        <input type="tel" name="number" id="number" className="number" placeholder='Phone Number' value={generalInfoItems.number} onChange={handleChange}/>
        <input type="email" name="email" id="email" className="email" placeholder='Email' value={generalInfoItems.email} onChange={handleChange}/>
        <input type="url" name="linkedin" id="linkedin" className="linkedin" placeholder='LinkedIn Profile' value={generalInfoItems.linkedin} onChange={handleChange}/>
        <input type="url" name="github" id="github" className="github" placeholder='GitHub Profile' value={generalInfoItems.github} onChange={handleChange}/>
        <input type="url" name="website" id="website" className="website" placeholder='Personal Website (Optional)' value={generalInfoItems.website} onChange={handleChange}/>
        <textarea name="description" id="description" className='description' rows="4" placeholder='Profile Description' value={generalInfoItems.description} onChange={handleChange}/>
      </fieldset>
    </form>
  )
}

export default GeneralInfo;