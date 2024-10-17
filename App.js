import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [green, setGreen] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggle = () => {
    if (green === 'light') {
      setGreen('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("white mode has been enabled", "success");
    } else {
      setGreen('light');
      document.body.style.backgroundColor = 'pink';
      showAlert("pink mode has been enabled", "success");
      document.title = 'Text-utils pink';
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text-utils dark';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text-utils Light';
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" about="AboutTextutils" mode={mode} toggleMode={toggleMode} green={green} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
         
            <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />     
         
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
