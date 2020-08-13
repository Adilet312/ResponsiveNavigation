import React, { useState } from 'react';
import './css/App.css';


 const App = () =>{
   const[getMenu,setMenu] = useState("site")
   return(
      <React.Fragment>
        <div className = {getMenu}>
          <header></header>
          <section className = "main-nav">
              <button className = "trigger" onClick={()=>{
                  getMenu === "site" ? setMenu("site reveal") : setMenu("site")}}>Menu</button>
              <nav>
                 <ul>
                     <li><a href="#">Javascript</a></li>
                     <li><a href="#">Python</a></li>
                     <li><a href="#">Java</a></li>
                     <li><a href="#">C#</a></li>
                 </ul>
               </nav>
          </section>
          <main></main>
          <aside></aside>
          <footer></footer>
         </div>
      </React.Fragment>
   )
 }
export default App;
