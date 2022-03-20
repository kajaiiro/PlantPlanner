import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Kasvikortti 1</h1>
              <p>
                Tähän "sneak peak" tekstiä
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Kasvikortti 2</h1>
              <p>
                Tähän "sneak peak" tekstiä
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;