import React from 'react';
import '../css/SearchVideo.css';

class SearchVideo extends React.Component{
    state={term :''};
    onInputChange =event =>{
        this.setState({term:event.target.value});
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    render(){
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search</label>
                    
                    <input 
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                </form>
            </div>

        );
    }

}
export default SearchVideo;