import jordansPic from './jordansPic.jpeg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className = "body">
      <div className="App">
        <h1>
          <Badge variant="secondary"style = {{
        colour:"white",
        backgroundColor: "#DB4437",
      }}>Chat</Badge>
          </h1>
        <Image src={jordansPic} roundedCircle 
          style = {{ 
            width: "200px", 
            height: "250px", 
            borderRadius: "50%",
            borderTop: "7px solid #DB4437",
            borderRight: "7px solid blue",
            borderBottom: "7px solid green",
            borderLeft: "7px solid #F4B400",
          }}
        />
       
          

      </div>
      <Button variant="primary" size = "lg" className = "buttonPlacement" style = {{ marginLeft: "190px"}}>Home</Button> 
      <Button variant="success" size = "lg" className = "buttonPlacement" >My Noogle</Button>{' '} 
      <Button variant="warning" size = "lg" className = "buttonPlacement">Explore</Button>{' '}
      <Button variant="danger" size = "lg" className = "buttonPlacement">Help</Button>{' '}
      
    
      
      
      


    </div>
  );
}

export default App;
