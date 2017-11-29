import React, { Component } from 'react';
import "./dist/App.css";
import episode_list from './episode_list.json'

class App extends Component{
    constructor(props){
        super(props);
        console.log(episode_list);
        this.state ={
            seassons: episode_list
        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            {
                                this.state.seassons.map((seasson) =>
                                <a 
                                    className={"list-group-item list-group-item-action ".concat(seasson.seasson_number === 1 ? " active": "") }
                                    id={"list-seasson-".concat(seasson.seasson_number).concat("-list") }
                                    data-toggle="list" 
                                    href={"#list-seasson-".concat(seasson.seasson_number) }
                                    role="tab" 
                                    aria-controls={"seasson-".concat(seasson.seasson_number)}>Seasson {seasson.seasson_number}</a>  
                            )}                            
                        </div>
                    </div>
                    <div className="col-9">
                        <div class="tab-content card-columns" id="nav-tabContent">
                            {
                                this.state.seassons.map((seasson) =>
                                <div 
                                    className={"tab-pane fade show".concat(seasson.key === 1 ? " show active" : "")}
                                    id={"list-seasson-".concat(seasson.seasson_number)} 
                                    role="tabpanel" 
                                    aria-labelledby={"list-".concat(seasson.seasson_number).concat("-list") }>
                                    
                                        
                                        <div className="card">
                                            <video className="card-img-top"
                                                src="{video}"
                                                type="video/mp4"
                                                controls
                                            />
                                            <div className="card-body">
                                            <p class="card-text">Episódio x</p>                                                            
                                            </div>
                                        </div>
                                        
                                        <div className="card">
                                            <video className="card-img-top"
                                                src=""
                                                type="video/mp4"
                                                controls
                                            />
                                            <div className="card-body">
                                            <p class="card-text">Episódio y</p>                               
                                            </div>
                                        </div>
                                        <div className="card">
                                            <video className="card-img-top"
                                                src="{video}"
                                                type="video/mp4"
                                                controls
                                            />
                                            <div className="card-body">
                                                <p class="card-text">Episódio z</p>                               
                                            </div>
                                        </div>                                    

                                </div>    
                            )}                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;