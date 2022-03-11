import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            {/* <div class="col-lg-7">            </div> */}

              {/* <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              /> */}
            <div class="col-lg-5">
              {/* <h3 class="font-weight-light">My first Entry</h3>
              <p>
               Enter your thots here...
              </p> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;