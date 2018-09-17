import React, { Component } from 'react';
import Navbar from './Navbar';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeartbeat,faSyringe,faXRay,faBrain,faBezierCurve,faDotCircle} from '@fortawesome/free-solid-svg-icons'
import Routes from './Routes';
library.add(faHeartbeat,faSyringe,faXRay,faBrain,faBezierCurve,faDotCircle);

class App extends Component {
    constructor(props) {
        super(props);
    }

    state={

    };



    render() {
    return (
      <div className="App">
          <Navbar/>
          <Routes/>
      </div>
    );
  }
}

export default App;

