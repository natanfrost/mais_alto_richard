import React, { Component } from 'react';
import "./dist/App.css";
import episode_list from './episode_list.json'

class App extends Component{
    constructor(props){
        super(props);        
        this.handleSeassonClick = this.handleSeassonClick.bind(this);
        
        this.state ={
            seassons: episode_list,
            current_seasson: ''
        }
    }

    handleSeassonClick(event){
        this.setState({current_seasson: event.target.value});
    }


    render(){

        const episodios = this.state.seassons
            .filter(seasson => {
                return seasson.seasson_number === this.state.current_seasson;
            })
            .map(seasson => {
                return seasson.episodes.map(episode =>{
                    return (
                        <div className="col-sm-3">
                            <div className="card">                            
                                <video className="card-img-top" controls="controls" src={episode.video_url} />
                                <div className="card-body">
                                    <p className="card-text"><small>{episode.name}</small></p>
                                </div>
                            </div>
                        </div>
                    )
                })                
            })

        return(
            <div className="row">
                <div className="col-sm-3">
                    <div className="list-group">
                        {
                            this.state.seassons.map((seasson) =>
                                <button                                    
                                    className={"list-group-item list-group-item-action"}
                                    id={"list-seasson-".concat(seasson.seasson_number).concat("-list") }                                    
                                    onClick={this.handleSeassonClick}
                                    value={seasson.seasson_number}
                                >
                                    {"Season - ".concat(seasson.seasson_number)}
                                </button>  
                            )
                        }                            
                    </div>
                </div>
                <div className="row col-sm-9">                    
                        {                            
                            episodios
                        }
                </div>
            </div>
        );
    }
}

export default App;