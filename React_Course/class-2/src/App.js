import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    {/* https://react.dev/learn for documentation */}
    {/* npx create-react-app folderName ==> to create a basic folder structure and to download basic required node modules for react app */}
    {/* Always keep your content inside <> </> to use multiple elements in a component */}
    {/* in components you need to write class as ClassName AND You always need to provide the href attribute for anchor tags */}
      <Navbar title="TextUtils"/>
    </>
  );
}

export default App;
