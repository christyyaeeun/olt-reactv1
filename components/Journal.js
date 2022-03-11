import React from "react";
import { Outlet } from "react-router-dom";
import { ClearEntry } from './ui-components';
function Journal() {
    return (
        <div className="home">
            <h2 className="text-center m-5">Journal Entries</h2>

            <div class="container-fluid d-flex justify-content-center">
                <div class="wrapper">
                <ClearEntry />
                    </div>
            </div>

            <Outlet />
        </div>

    );
}

export default Journal;