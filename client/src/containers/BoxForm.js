import React, { Component } from 'react'
import{connect} from 'react-redux';
import {newBox} from '../actions/boxActions';
import '../css/Home.css';

 class BoxForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "",
            description: "",
            year: "",
            size: "",
            imgUrl: "",
            artist: "",
            location: ""
        }
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('A');
        this.props.newBox(this.state);
        console.log('B');
        event.preventDefault();
        this.setState({
            name: "",
            description: "",
            year: "",
            size: "",
            imgUrl: "",
            artist: "",
            location: ""
        })
    }
    
    render() {
        return (    
            <div className= 'container'>
                <h2>Add Item to Collection</h2>

                <form onSubmit={this.handleSubmit} >
                   <div className="boxform">
                       <label>Name:</label>
                       <input type="text" onChange={this.handleChange} name ="name" value={this.state.name}/>
                        <br/>
                       
                       <label>Size:</label>
                       <input type="text" onChange={this.handleChange} name ="size" value={this.state.size}/>
                       <br/>
                       <label>Year:</label>
                       <input type="text" onChange={this.handleChange} name ="year" value={this.state.year}/>
                       <br/>
                       <label>Image: </label>
                       <input type="text" onChange={this.handleChange} name="imgUrl" value={this.state.imgUrl}/>
                       <br/>
                       <label>Artist: </label>
                       <input type="text" onChange={this.handleChange} name="artist" value={this.state.artist}/>
                       <br/>
                       <label>Village: </label>
                       <input type="text" onChange={this.handleChange} name="location" value={this.state.location}/>
                       <br/>
                       <label>Description:</label>
                       <input type="text" onChange={this.handleChange} name ="description" value={this.state.description}/>
                       <br/>

                       <button className="addbox" type="submit" value="submit">Submit</button>
                   </div>
                </form>
            </div>
        )
    }
}
export default connect(null, {newBox}) (BoxForm);