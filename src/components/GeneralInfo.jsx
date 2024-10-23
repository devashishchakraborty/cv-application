import "../styles/GeneralInfo.css"
import { useState } from "react";
import { hideAddItemForm, showAddItemForm } from "./CVEditor";

function GeneralInfo(){
    return (
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
    )
}

export default GeneralInfo;