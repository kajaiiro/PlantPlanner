import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        
  <div>
  <h1>Introduction:</h1>
  <p>We're four front-end web developments students. Goal of this dynamic group project is to learn how to develop a web service as a group and learn its technologies.</p>
<br/>Technologies<br/>
<ul>
<li>HTML 5</li>
<li>CSS 3</li>
<li>Javascript</li>
<li>React</li>
</ul>
  <img alt="landing page"></img>
  <img alt="landing page"></img>
  </div>
  <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label><br/>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
        </div>
     
  );
}

export default Home;