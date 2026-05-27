// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { AppProvider } from "./context/AppContext";
import TranslationForm from "./components/TranslationForm";
import History from "./components/History";

function App() {
  
  return (
    <AppProvider >

      <h1>Translation Form</h1>
      <TranslationForm />

      <History />
    </AppProvider>
  );
}

export default App;