import React, { Component } from 'react';
import episode_list from './episode_list.json'
import './App.css';
import {DM} from './all.js'

class App extends Component{
    constructor(props){
        super(props);        

        this.handleSeassonClick = this.handleSeassonClick.bind(this);
        this.randomTrue = this.randomTrue.bind(this);
        this.playVideo = this.playVideo.bind(this);

        this.state ={
            seassons: episode_list,
            current_seasson: '',
            generateRandom: false
        }
    }

    playVideo(e){
        var player = DM.player(document.getElementById(e.target.id), {
            video: "xwr14q",
            params: {
                autoplay: true,
                mute: true
            }
        });
    }

    handleSeassonClick(event){             
        this.setState({current_seasson: event.target.value, generateRandom: false});                           
    }
   
    getRandomEpisode(){
        var randomSeason = this.state.seassons[Math.floor(Math.random()*this.state.seassons.length)];
        var randomEpisode = randomSeason.episodes[Math.floor(Math.random()*randomSeason.episodes.length)]        

        return (
            <div className="col-sm-3">
                <div className={"card animate_".concat(this.state.toggle_animation)}>                            
                    
                    <iframe title={randomEpisode.name} className="card-img-top" src="" allowFullScreen frameBorder="0"></iframe>
                    
                    <div className="card-body">
                        <p className="card-text text-center"><small>{randomEpisode.name}</small></p>
                    </div>
                </div>
            </div>
        )
    }

    getEpisodes(){
        return this.state.seassons
            .filter(seasson => {
                return seasson.seasson_number === this.state.current_seasson;
            })
            .map(seasson => {
                return seasson.episodes.map(episode =>{
                    return (
                        <div className="col-sm-3">
                            <div className={"card animate_".concat(this.state.toggle_animation)}>                            
                                
                                <div id={episode.video_url} className="card-img-top"
                                    onClick={this.playVideo}
                                ></div>
                                
                                
                                <div className="card-body">
                                    <p className="card-text text-center"><small>{episode.name}</small></p>
                                </div>
                            </div>
                        </div>
                    )
                })                
            })
    }

    randomTrue(){
        this.setState({generateRandom: true})
    }

    render(){

        
        return(
            <div className="row">
                <div className="col-sm-2">
                    
                    <button 
                        type="button" 
                        className="list-group-item list-group-item-action text-center"
                        data-toggle="collapse"
                        data-target="#list-seasons"
                        aria-expanded="false" 
                        aria-controls="list-seasons"
                    >Seasons
                        <span className="badge badge-pill badge-dark float-right">{this.state.seassons.length} { " seasons"}</span>
                    </button>
                
                    <div id="list-seasons" className="collapse">
                        <div className="list-group">
                        {                            
                            this.state.seassons.map((seasson) =>
                                <button                                    
                                    className={"list-group-item list-group-item-action text-center "}
                                    id={"list-seasson-".concat(seasson.seasson_number).concat("-list") }                                    
                                    onClick={this.handleSeassonClick}
                                    value={seasson.seasson_number}
                                >
                                    {"Season - ".concat(seasson.seasson_number)}
                                    <span className="badge badge-pill badge-success float-right">{seasson.episodes.length} { " episodes"}</span>
                                </button>  
                            )                            
                        }    
                        </div>                        
                    </div>
                    <button 
                        type="button"
                        className="list-group-item list-group-item-action text-center"
                        onClick={this.randomTrue}
                    >Random episode
                    </button>
                </div>
                <div className="row col-sm-10">                    
                    {                        
                        this.state.generateRandom === false ? this.getEpisodes() : this.getRandomEpisode()
                    }
                </div>
            </div>
        );
    }
}

export default App;