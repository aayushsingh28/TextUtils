import React, { useState } from "react";

export default function TextForm(props) {
  // Convert to Lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  
  // Convert to Uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  
  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  
  // Handle changes
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    // props.showAlert("Text Changed!", "success");
  };
  
  // Copy Text
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  
  const handleExtraSpaces = () => {
    // let newText = text.split(/[ ]/+/);
    // setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
            // placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview."}</p>
      </div>
    </>
  );
}
