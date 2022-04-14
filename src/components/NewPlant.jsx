
import React from "react";
const { getInitationTime } = require('../routes/timer/timer.js')

function NewPlant() {
  return (
    <div className="NewPlant">
       <div class="home">
          <div className="create-user">
          <div class="d-flex justify-content-center">
          <form className="NewUser">
          <div class="row">
            <h1>New Plant</h1>
            </div>
            
            <div class="row">

      <div class="col-25">
        <label for="Plantname">Plantname:</label>
      </div>
      <div class="col-75">
        <input type="text" id="Plantname" name="Plantname" placeholder="Your plants name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="info">Additional info:</label>
      </div>
      <div class="col-75s">
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      </div>
    </div>
    <div class="row">
    <div class="col-50">
        <label for="Watering cycle">Watering cycle:</label>
      </div>
    <div class="col-50">
        <select id="country" name="country">
          <option value="week">Once a week</option>
          <option value="2week">Every two weeks</option>
          <option value="month">Once a month</option>
        </select>
      </div>
      </div>

      <div class="col-50">
      <p>Plant watered<br/><span id="js-initiation-time">-</span></p>
          <button type="button" onClick={getInitationTime}>Water</button>
      </div>
      
    <div class="row justify-content-center">
      <input type="submit" value="Submit"></input>
    </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}

export default NewPlant;