import './css/App.css';
import React from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import Searchbar from './components/Searchbar';
import Videos from './components/Videos';
import Search from './components/Search';

import Header from './components/Header';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
/*function App() {
  window.navigator.geolocation.getCurrentPosition(
(position) => console.log(position),
err => console.log(err)
  );
  return (
    <div className="App">
     Hi sexy!
      </div>
  );
}*/

class App extends React.Component {
  constructor(props) {

    super(props);
    
  }
  render(){
    return(
      <>
      
      <Router>

      <Header/>
      <Route  path="/VideoSearch" exact component={Videos} />
      <Route  path="/" exact component={SeasonDisplay} />

      <div className="App">
    <Route  path="/Searchbar" exact component={Searchbar} />
    <Route  path="/Search" exact component={Search}/>
    </div>
    </Router>
    </>
    );
    

    
  };
};

export default App;
