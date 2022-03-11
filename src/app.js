// import { Amplify } from "aws-amplify";
// import { useAuthenticator } from "@aws-amplify/ui-react";
// import { Homepage } from "./containers/Homepage";
// import { Login } from "./containers/Login";
// import "./styles/style.css";
// import React from 'react';
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

// export default function App() {
//   const { user } = useAuthenticator();

//   if (user) {
//     return <Homepage />;
//   }

//   return <Login />;
// }




/*import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <div>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      </div>
  );
}

export default withAuthenticator(App);*/ 

import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./containers/Header";
import { Footer } from "./containers/Footer";
import { SignInHeader } from "./containers/SignInHeader";
import { SignInFooter } from "./containers/SignInFooter";
import "./styles/style.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export function App({ signOut, user }) {
  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});