import React,{useState} from 'react'


export default function TextForm(props) {

 const Convertcapitalizebtn =() =>{
   let newuptext = test.charAt(0).toUpperCase() + test.slice(1);
   settext(newuptext);
    }


const ConvertUppercasebtn =() =>{
  console.log("Uppercase click");

  let newuptext = test.toUpperCase();
  settext(newuptext);
}

const Convertlowercaaesbtn =() =>{
  console.log("LowerCase click");

  let newuptext = test.toLowerCase();
  settext(newuptext);
}


const handlechangeup =(event) =>{
  console.log("onchange click");
  settext(event.target.value);
}
const handleclear =()=>{

  settext('');
}

const handleRead =()=> {

  setIsShown(current => !current);
}
const handleCopy =()=> {
  const text = document.getElementById('ctform');
  text.select();
  navigator.clipboard.writeText(text.value);

}



const [isShown, setIsShown] = useState(false);
  const [test, settext] = useState('');
  return (
  
    <>
    <div className='continer'>
    <p>{props.heading}</p>
<div className="mb-3">
      
  <textarea className="form-control" id="ctform" rows="8" value={test} onChange={handlechangeup}></textarea>
</div>

<button className="btn btn-primary m btsize" onClick={ConvertUppercasebtn}>Uppercase</button>
<button className="btn btn-primary ml-2 btsize" onClick={Convertlowercaaesbtn}>Lowercase</button>
<button className="btn btn-primary ml-2 btsize" onClick={Convertcapitalizebtn}>Capitalize</button>
<button className="btn btn-primary ml-2 btsize" onClick={handleclear}>Clear</button>
<button className="btn btn-primary ml-2 btsize" onClick={handleCopy}>Copy Text</button>

    </div>
<div className="container my-5">
  <p> {test.split(" ").length} words and {test.length} Characters</p>
  <p className='clrtxt' onClick={handleRead}>View......... <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
    </svg> </p>
    
    
    {isShown && (
        <div>
          <b>{test}</b>
        </div>
      )}

  
</div>
    </>
  )
}

