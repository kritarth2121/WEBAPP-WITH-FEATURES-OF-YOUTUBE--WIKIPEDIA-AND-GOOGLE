import React from 'react';
import axios from 'axios';
import Imagelist from './Imagelist';

class Searchbar extends React.Component {
    state ={term : '',images : [] };
    inputchange(event){
        console.log(event.target.value);
    }
    onFormSubmit = async(event) =>{
        event.preventDefault();
         await axios.get('https://api.unsplash.com/search/photos',{

        params: {query :this.state.term},
        headers:{
            Authorization: 'Client-ID rRsg2L2V2FcA3BtJViiDZjkCWJDi3Jb3owtvsFi7YNY'
        }
        })
        .then(response => {
            this.setState({images:response.data.results});
            console.log(this.state.images);
        });
        
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label> Image Search</label>
                        <input type="text" value = {this.state.term} onChange={ e => this.setState({term:e.target.value})}></input>
                    </div>
                    Found {this.state.images.length}
                </form>
                
                <Imagelist image={this.state.images} />
            </div>
        )

    }
}
export default Searchbar;