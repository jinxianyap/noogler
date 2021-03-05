import jordansPic from './jordansPic.jpeg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Image src={jordansPic} roundedCircle 
        style = {{ 
          width: "200px", 
          height: "250px", 
          borderRadius: "50%",
          borderTop: "7px solid red",
          borderRight: "7px solid blue",
          borderBottom: "7px solid green",
          borderLeft: "7px solid yellow",
        }}
      />

      <p className = "paragraphDecoration"></p>
    </div>
  );
}

export default App;
