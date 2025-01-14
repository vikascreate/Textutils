import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [lastUndo,setLastUndo]=useState([]);
 // const [lastRedo,setLastRedo]=useState([]);
  const [isupper, setisUpper] = useState(false);
  const handleUPClick = () => {
    setisUpper(true);
    if (text.length !== 0) {
        //setLastUndo(text)
    //  console.log("Converting to upper case");
      setLastUndo([...lastUndo,text])
      let UCtext = text.toUpperCase();
      setText(UCtext);
    } else {
     // console.log("Some text required to perform this operation.");
    }
  };
  const handleUpperCase = (e) => {
    //console.log("Converted Upper Case");
    setLastUndo([...lastUndo,text])
    setText(e.target.value);
  };
  const handleClear = (e) => {
    if (text.length === 0) {
    //  console.log("Already Cleared!");
    } else {
    //  console.log("Text Field Cleared");
      setText("");
    }
  };

  const styleLight = {
    backgroundColor: "red",
    // color : "voilet"
  };
  const styleDark = {
    backgroundColor: "green",
    // color : "voilet"
  };
  function handleLPClick() {
    if (text.length !== 0) {
      //  setLastUndo(text)
    //  console.log("Converting to lower case");
      let UCtext = text.toLowerCase();
      setLastUndo([...lastUndo,text])
      setText(UCtext);
    } else {
    //  console.log("Some text required to perform this operation.");
    }
    setisUpper(false);
  }
  function handleUndoClick(){
    if(text.length!==0){
        if(lastUndo.length>0){
            const txt=lastUndo.pop();
       // setLastRedo([...lastRedo,txt])
       setText(txt)}
    }
  }
//   function handleRedoClick(){
//     console.log(lastRedo)
//     if(text.length!==0){
//         if(lastRedo.length>0){
//             const txt=lastRedo.pop();
//          setLastUndo([...lastUndo,txt])   
//        setText(txt)}
//     }else{
//         console.log(lastRedo)
//     }
//   }
  return (
    <>
      <div className="container my-4">
        <h2>Text Utility</h2>
        <div className="row">
          <div className="form-group col-md-6">
            <textarea
              className="form-control my-1 "
              rows="6"
              value={text}
              onChange={handleUpperCase}
              style={{
                backgroundColor: props.theme === "light" ? "white" : "#242428",
                color: props.theme === "light" ? "black" : "#bbb",
                border:
                  props.theme === "light"
                    ? "1px solid lightgrey"
                    : "1px solid #444",
              }}
            ></textarea>
            {isupper ? (
              <button className="btn btn-primary" onClick={handleLPClick}>
                Lowercase
              </button>
            ):(
                <button className="btn btn-primary" onClick={handleUPClick}>
              Uppercase
            </button>
            )}
            <button className="btn btn-primary" style={{marginLeft:'15px',marginRight:'10px',marginTop:'1px'}} onClick={handleUndoClick}>
              Undo
            </button>
            {/* <button className="btn btn-primary" style={{marginLeft:'15px',marginRight:'10px',marginTop:'1px'}} onClick={handleRedoClick}>
              Redo
            </button> */}
            <button className="btn btn-danger mx-1" onClick={handleClear}>
              Clear
            </button>
          </div>

          <div className="col-md-6 rounded">
            <span className="border-bottom fs-3">Summary</span>
            <div className="processed m-2">
              <p>
                {text.split(" ").length} words and {text.length} Chacters
              </p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <span className="border-bottom fs-4">Preview</span>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

