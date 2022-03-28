import React from "react";

function NewUser() {
  return (
      <div class="home">
          <div className="NewUser">
          <div class="d-flex justify-content-center">
          <form className="NewUser">
          <div class="row">
            <h1>New User</h1>
            </div>
            
            <div class="row">

      <div class="col-25">
        <label for="fname">Email</label>
      </div>
      <div class="col-75">
        <input type="text" id="email" name="email" placeholder="Your email.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Password</label>
      </div>
      <div class="col-75s">
        <input type="text" id="password" name="password" placeholder="Your password"></input>
      </div>
    </div>
    <div class="row justify-content-center">
      <input type="submit" value="Submit"></input>
    </div>
            </form>
          </div>
        </div>
      </div>

  );
}

export default NewUser;