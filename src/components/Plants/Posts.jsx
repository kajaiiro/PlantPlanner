import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="form">
        <Link to="/Plants/this-is-a-post-title">
          <div class="row align-items-center my-5">
          
              <h1 class="font-weight-light">Kasvikortti 1</h1>
              <p>
                Tähän "sneak peak" tekstiä
              </p>
            </div>

        </Link>
      </div>
      <div class="form">
        <Link to="/Plants/this-is-a-post-title">
          <div class="row align-items-center my-5">
              <h1 class="font-weight-light">Kasvikortti 2</h1>
              <p>
                Tähän "sneak peak" tekstiä
              </p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;