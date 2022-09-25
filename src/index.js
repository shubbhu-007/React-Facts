import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import App from "./App";

// const Para=(
//   <div>
//   <img src ={require( "./react.png")} alt = "react-images"/>
//     <h1>
//       Fun facts about React
//     </h1>
//     <ul>
//     <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// function Header() {
//   return (
//     <div>
//       <header>
//         <nav className="nav">
//           <img src={require("./react.png")} alt="react-images" />
//         <ul className="nav-items">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
        
//         </nav>
//       </header>
//     </div>

//   )
// };




// function MainContent() {
//   return (
//     <div>
//       <h1>
//         Fun facts about React
//       </h1>
//       <ol>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ol>
//     </div>
//   )
// };




// function Footer() {
//   return (
//     <div>
//       <footer>
//         <small>© 2021 Ziroll development. All rights reserved.</small>
//       </footer>
//     </div>
//   )
// };





// function Page() {
//   return (
//     <>
//       <Header />,
//       <MainContent />,
//       <Footer />

//     </>
//   )
// }




ReactDom.render(
  <App/>,
  document.getElementById("root")
);