import React from "react";
// import { SideBar } from './ui-components';
import { ProfSet } from "./ui-components";
function Settings() {
  return (
    <div className="home">
      <div class="container">
        <h2 className="text-center mt-5">Edit Profile</h2>
        <div class="container">
          <div class="container-fluid d-flex justify-content-center">
            <ProfSet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
