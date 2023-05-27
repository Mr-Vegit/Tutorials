import React,{useState} from 'react';
// {useState} is an example of hooks 
// Hooks help us to use the features of Class based components in functional components without using classes 

export default function TextForm(props) {
    const[text,setText] = useState("");
    // state is a variable which is watched by react and whenever the its value changes the component is re-rendered
    // useState is  a function which returns an array of two elements. The first element is a variable and the second element is a function to change the value of the variable
    // NOTE: usestate is a local function and can only be used in the component in which it is defined

    // the value of text is set to "" and setText is used to change the value of text
    // In react we never change the value of a variable directly we always use a function to change the value of a variable
    // for Example: setText("New text") ==> This will change the value of text to "New text"
    // text = "New text" ==> This will not work as it is the wrong way to change it


    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
