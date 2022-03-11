import React from "react";
import { Outlet } from "react-router-dom";
import { ShadowTile, TogetherIcon } from "./ui-components";
// import { Tilly } from "./ui-components";
import { Game1 } from "./ui-components";


<Game1 />

function Together() {
  return (
    <div className="home">
      <div class="container-fluid ">
      {/* <h2 className="text-center mt-3 mb-3 d-flex justify-content-center">

      <TogetherIcon /></h2> */}

   
<TogetherIcon />

        <div class="container mb-3">
          <div class="container-fluid d-flex justify-content-center mt-5">
            <Outlet />
            <ShadowTile />
          </div>

          <h2 className="text-center mt-5 mb-1 d-flex justify-content-center">
        <Game1 />
        </h2>
        <h2 className="text-center mt-3 mb-3 d-flex justify-content-center">
        <Game1 />
        </h2>
        </div>
        <div class="container pt-4 mt-4">
            <div class="container-fluid d-flex justify-content-center">
          {/* <Tilly /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Together;
