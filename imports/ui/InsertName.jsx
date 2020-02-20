import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';

class InsertName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: ""
         }
    
         this.onChange = this.onChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
        }

    onChange(event){
        this.setState({name: event.target.value})
    }

    onSubmit(event){
        this.setState({error: ""})
        event.preventDefault()
        Meteor.call('dognames.insert',this.state.name, (error,result)=>{
            if(error){
                this.setState({error: error.reason})
            }
        })
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Add new dog name</label>
                    <input 
                    value={this.state.name} 
                    onChange={this.onChange} />
                    <input type="submit" value="Add" />
                    <label style={{color:"red"}}>{this.state.error}</label>
                </form>
            </div>
         );
    }
}
 
export default InsertName;