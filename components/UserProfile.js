import React from "react";
import { Outlet } from "react-router-dom";
// import { MainPage } from "./ui-components";
// import { Profile } from "./ui-components";
import { Together } from "./ui-components";
import { SMPhotoGrid } from "./ui-components";

<SMPhotoGrid />

function UserProfile() {
  return (
    <div className="home">
      <div class="container-fluid ">

        <div class="container mb-3">
        <h2 className="text-center mt-5 mb-3 d-flex justify-content-center">
       
       <Together /> </h2>

          <div class="container-fluid d-flex justify-content-center">
            <Outlet />
            {/* <Profile /> */}
          </div>
        </div>

        <div class="container-fluid d-flex justify-content-center" id="profile">
<SMPhotoGrid />
        </div>

      </div>
    </div>
  );
}

export default UserProfile;



    