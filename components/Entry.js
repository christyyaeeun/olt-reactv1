import React from "react";
import { Outlet } from "react-router-dom";
// import { HomePage } from "./ui-components";
import { MainPage } from "./ui-components";

function Feed() {
  return (
    <div className="home">
      <div class="container" id="homepage">
        <h2 className="text-center mt-2"> Entries</h2>
        <MainPage />
        {/* <div class="container d-flex justify-content-center">
          <SMPhotoGrid />
        </div> */}
        {/* <HomePage /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Feed;
