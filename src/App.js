import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Home from './screens/Home';
import Main from './screens/Main';


function App() {

  return (

    <Router>


    <Routes>
 
      
      <Route path="/" element={<Home/>} />
      <Route path="/main" element={<Main/>} />
    
     

  
    </Routes>
  </Router>


  );
}

export default App;
