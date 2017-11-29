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
        console.log(event.target.value);
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
                                    onMouseDown={this.handleSeassonClick}
                                    onClick={this.handleSeassonClick}
                                    aria-controls={"seasson-".concat(seasson.seasson_number)}>Seasson {seasson.seasson_number}                                    
                                </a>  
                            )}                            
                        </div>
                    </div>
                    <div id="list_episodes" className="col-9">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;