
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
                  <div class="col">
                    <label for="Plantname">Plant name:</label>
                    <input type="text" id="Plantname" name="Plantname" placeholder="Your plant's name..."></input>
                  </div>

                </div>
                <div class="row">
                  <label for="info">Additional info:</label>
                  <textarea id="subject" name="subject" placeholder="Write something..."></textarea>
                    
                </div>

                <div class="row" >
                  <div class="row-10 ">  
                    <label for="Watering cycle">Watering cycle:</label>
                  
                    <select select id="country" name="country">
                    <option value="week">Once a week</option>
                    <option value="2week">Every two weeks</option>
                    <option value="month">Once a month</option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <p>Plant watered: <span id="js-initiation-time"></span></p>
                  <div class="col">
                    <button class="col" type="button" onClick={getInitationTime}>Water</button>
                  </div>
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
