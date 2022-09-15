import { useState } from "react";
import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from './components/Textform'
let name = "Killer";
function App() {
    const[mode,setmode]=useState('light');
    const togglemode=()=>{
      if(mode==='light')
      {
        setmode('dark');
        document.body.style.backgroundColor='grey';
      }
      else
      {
        setmode('light');
        document.body.style.backgroundColor='white';
      }
    }
    return (
    <>
      <Navbar title="TextUtils" AboutText="About Us" mode={mode} togglemode={togglemode}/>
      <div className="container">
        <TextForm heading="Enter your text to Analyze"/>
        <div className="container my-3">
          {/* <a class="btn btn-primary" onClick={toggleStyle} href="#" role="button">{btntext}</a> */}
        </div>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
