import React ,{useEffect} from 'react';
import axios from 'axios';

import { useState } from 'react';
const Search=()=>{
    const [term,setTerm]=useState('')
    const [result,setResult]= useState([])
    console.log(result,setResult);
    //use effect runs only when the second arguement changes
    useEffect(() => {
        const search = async () =>{ 
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action: 'query',
                list:'search',
                origin: '*',
                format: 'json',
                srsearch : term ,
            },
        });

setResult(data.query.search);
    };
    
const timeoutID=setTimeout(()=>{
    if (term){
        search();}

},500);

 

    },[term]);
    const renderered=result.map((results) => {                                                                                          
        return (
            <div className="item" key={results.pageid}>
                <div className="right floated content">
                    
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${results.pageid}`}> <button style={{float:"right" 
                   , marginRight:"30px",}}>VISIT</button> </a>
                            </div>
    <div className="content">
    <div className="header">
       <div className="header">
          <b>{results.title}</b> 
       </div>
      <span dangerouslySetInnerHTML={{__html: results.snippet}}></span> 
    </div>
    <hr></hr>

    </div>
            </div>
        )
    });
    return (

        <div>
            <div className="ui form">
           <label>Enter Search txt</label>
                 <input value={term} onChange={(e)=> setTerm(e.target.value)}
                 className="input"
                />
            </div>
            <div className="content">
                {renderered}
            </div>
        </div>
    )
}

export default Search;