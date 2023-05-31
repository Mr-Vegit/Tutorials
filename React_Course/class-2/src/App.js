import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  return (
    <>
    {/* https://react.dev/learn for documentation */}
    {/* npx create-react-app folderName ==> to create a basic folder structure and to download basic required node modules for react app */}
    {/* Always keep your content inside <> </> to use multiple elements in a component */}
    {/* in components you need to write class as ClassName AND You always need to provide the href attribute for anchor tags */}
    {/* NOTE you always need to close a tag it doesnot matter if it is a single tag like input */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"/>
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze below"/> */}
        <About/>
      </div> 
    </>
  );
}

export default App;
