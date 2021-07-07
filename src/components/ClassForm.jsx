import React, { Component } from 'react';
import '../components/ClassForm.css'


class ClassForm extends Component {
    constructor (props) {
        super(props); 
        
        this.state= {
        username:"",
        email:"",
        password:""
         };
    }

    // this.handleChange =this.handleChange.bind(this)

    handleChange =(event) => {
        this.setState({[event.target.name]: event.target.value})

    }

    handleSubmit =(event) => {
        event.preventDefault();
        console.log(this.state)
        this.setState({username: "", email:"", password:""})


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label htmlFor="">Name:</label><br />
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />

                <label htmlFor="email">Enter your email:</label><br />
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input><br />

                <label htmlFor="password">Password:</label><br />
                <input type="password" name="password"  value={this.state.password} onChange={this.handleChange}/> <br />

                <button>Submit</button>

            </form>
        );
    }
}

export default ClassForm;
