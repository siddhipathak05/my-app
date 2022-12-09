import React,{useState} from "react";
import Alert from "./alert";

function Navbar(props)
{
    const [text,setText]=useState("");
    const [mode,setMode]=useState("light");
    const [btn,setBtn]=useState("Dark Mode");
    const [alert,setAlert]=useState(null);

    const showAlert= (message,type)=>{
        setAlert(
            {
                msg : message,
                type : type
            }
        )
        setInterval(()=>{
            setAlert(null);
        },1000);
    }
    const changeMode=()=>{
        if(mode==="light")
        {
            setMode("dark");
            document.body.style.backgroundColor= "#042743";
            setBtn("light Mode");
            showAlert("Enable Dark Mode","success");
        }
        else{
            setMode("light");
            document.body.style.backgroundColor= "white";
            setBtn("dark Mode");
            showAlert("Enable Light Mode","success");
        }
    }
    const upper=()=>{
        let newText=text.toUpperCase();
        //console.log(newText);
        setText(newText);
        showAlert("Text Converted to Upper Case ","success");
    }
    const low=()=>{
        let newText=text.toLowerCase();
        //console.log(newText);
        setText(newText);
        showAlert("Text Converted to Lower Case ","success");
    }
    
    const clear=()=>{
        let newText='';
        setText(newText);
        showAlert("All text are deleted ","success");
    }
    
    const change=(event)=>{
        setText(event.target.value);
    }
    return <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/">{props.About}</a>
          </li>
          </ul>

        </div>
        <button onClick={changeMode}>{btn}</button>
        </nav>
        <div style={{height: "50px"}}><Alert alert={alert}/></div>
        <div className="container my-3" >
            <h1 style={{color:mode==="light"?"black":"white"}}>Word Counter</h1>
            <textarea className="form-control" rows="8" value={text} onChange={change} style={{backgroundColor:mode==="dark"?"#13466e":"white", color:mode==="dark"?"white":"black"}}></textarea>
            <button className="btn btn-primary my-3" onClick={upper}>UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={low}>LowerCase</button>
            <button className="btn btn-primary" onClick={clear}>ClearText</button>
        </div>
        <div className="container">
            <h1 style={{color:mode==="light"?"black":"white"}}>Summary</h1>
            <p style={{color:mode==="light"?"black":"white"}}>Total Characters - {text.length} <br /> Total Words - {text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
            <h1 style={{color:mode==="light"?"black":"white"}}>Preview</h1>
            <p style={{color:mode==="light"?"black":"white"}}>{text}</p>
        </div>
    </div>;
}

export default Navbar;