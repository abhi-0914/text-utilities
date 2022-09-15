import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick1 = () => {
    console.log("Uppercase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnClick2 = () => {
    console.log("Lowercase Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnClick3 = () => {
    console.log("Clear Text Was Clicked");
    let newText = " ";
    setText(newText);
  };
  const handleOnClick4 = () => {
    console.log("Remove Spaces Was Clicked");
    let newText = text.split(" ").join("");
    setText(newText);
  };
  const handleOnClick5 = () => {
    console.log("Copy Text Was Clicked");
    let text = document.getElementById("MyBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    window.alert("Text Copied To Clipboard");
  };
  const handleOnChange = (event) => {
    console.log("OnChange Activated");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <label for="MyBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="MyBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"}}>
          </textarea>
        </div>
        <button className="btn btn-primary" mx-2 onClick={handleOnClick1}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary" mx-1 onClick={handleOnClick2}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary" mx-1 onClick={handleOnClick3}>
          Clear Text
        </button>
        <button className="btn btn-primary" mx-1 onClick={handleOnClick4}>
          Remove Spaces
        </button>
        <button className="btn btn-primary" mx-1 onClick={handleOnClick5}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Based On Your Text</h2>
        <p>No. Of Words Are : {text.split(" ").length}</p>
        <p>Characters are : {text.length}</p>
        <p>Time To Read This :: {0.1 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
