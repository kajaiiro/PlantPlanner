import React from "react";


function Home() {
  return (
    //Wrapper
<div className="home">

<div className="login-page"> {/*Login */}
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div> {/*Login */}
    <div className="introduction">
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



</div> //Wrapper
);
}

export default Home;