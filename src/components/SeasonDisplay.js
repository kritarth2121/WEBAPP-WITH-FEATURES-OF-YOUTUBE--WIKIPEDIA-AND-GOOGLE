import React from 'react';
import '../css/SeasonDisplay.css';
import Spinner from './Spinner';
import { BrowserRouter as Link  } from 'react-router-dom';
const SeasonConfig = {
    summer :{
        text : "Lets hit the beach!",
        iconName : 'sun'
    },
    winter : {
        text :'Burr it is cold',
        iconName : 'snowflake'
    }
};
const getSeason = (lat,month) =>
{ 
    if (month>2 && month<9){
       return lat >0 ? 'summer' : 'winter';
    }
    else{
        return lat < 0 ? 'summer' : 'winter';
    }
}

class SeasonDisplay extends React.Component{
    state={lat :null , error : '',season: '',text:'',iconName:''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({ lat: position.coords.latitude }),
          err => this.setState({ errorMessage: err.message })
        );
        const season = getSeason(this.state.lat, new Date().getMonth());
        const { text, iconName } = SeasonConfig[season];
          this.setState({season:season,text:text,iconName:iconName});
      }
    render(){

        console.log(this.state.season);
        
    if (this.state.error && !this.state.lat){
        return (
          <div className="ui container">
         <div>{this.state.error}</div>
          </div>)}
          if (!this.state.error && this.state.lat){
            return (
              <div className={`season-display ${this.state.season}`}>
             <div>Latitude:{this.state.lat}
             <div >
            <i className ={`icon-left massive ${this.state.iconName} icon`} />
            <h1>{this.state.text}</h1>
            <i className ={`icon-right massive ${this.state.iconName} icon`} />

            </div>             </div>
              </div>)} 
    return(
      <div className="ui container">
             <div><Spinner /></div>
              </div>)
    


    };
};








export default SeasonDisplay;