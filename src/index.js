// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles/index.css";
// // import "./App.js";
// import "@aws-amplify/ui-react/styles.css";
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// // import DatePicker from 'react-modern-calendar-datepicker';
// import "./style.css"



// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   Navigation,
//   // Login,
//   Footer,
//   Home,
//   Journal,
//   UserProfile,
//   Settings,
//   Together,
//   Entry,
 
//   Posts,
//   Post,
//   // SignUp,
//   // Dashboard,
// } from "./components";

// ReactDOM.render(
//   <Router>
//     <Routes>
//       {/* <Route path="/" element={<SignUp />} /> */}
//       <Navigation />

//       {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

//       <Route path="/UserProfile" element={<UserProfile />} />
//       <Route path="/profile" element={<UserProfile />} />
//       <Route path="/settings" element={<Settings />} />
//       <Route path="/together" element={<Together />} />
//       <Route path="/entry" element={<Entry />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/journal" element={<Journal />} >
//         <Route path="" element={<Posts />} />
//         <Route path=":postSlug" element={<Post />} />
//       </Route>
//     </Routes>
//     <Footer />
//   </Router>,

//   document.getElementById("root")
// );

// serviceWorker.unregister();

import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AmplifyProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider>
  </StrictMode>,
  rootElement
);
