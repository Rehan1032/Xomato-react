import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

const url = "https://zoomjwt2.herokuapp.com/api/auth/register";

class Register extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:"",
            phone:45465757
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
              <Header/>
           
              <div class="container">
	    
		<div class="col-sm-8 col-sm-offset-2 main">
		<div class="col-sm-6 left-side">
		<h1>Hello<br/>World.</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique justo eget nibh convallis pharetra.</p>
		<br/>
		<p>Login with social media</p>
		<Link class="fb" href="https://ccp.cloudaccess.net/aff.php?aff=5188" target="_blank">Login With Facebook</Link>
		<Link class="tw" href="https://ccp.cloudaccess.net/aff.php?aff=5188" target="_blank">Login With Twitter</Link>

		</div>
		
		<div class="col-sm-6 right-side">
		<h1>Login</h1>
		<p>Don't have an account? Create your account, it takes less than a minute</p>
		

<div class="form">

<div class="form-group">
		    <label for="form2">Your Name</label>
            <input type="text" id="form2" class="form-control" name='name' value={this.state.name}
            onChange={this.handleChange}/>
        </div>
        <div class="form-group">
		    <label for="form2">Your Email</label>
            <input type="text" id="form2" class="form-control" name='email' value={this.state.email}
            onChange={this.handleChange}/>
        </div>

        <div class="form-group">
		    <label for="form4">Your Password</label>
            <input type="password" id="form4" class="form-control" name='password' value={this.state.password}
            onChange={this.handleChange}/>
           
        </div>
        <div class="form-group">
		    <label for="form2">Your Phone</label>
            <input type="text" id="form2" class="form-control" name='phone' value={this.state.phone}
            onChange={this.handleChange}/>
        </div>
       

        <div class="text-xs-center">
            <button  class="btn btn-deep-purple"  onClick={this.handleSubmit}>Register</button>
        </div>


</div>
</div>
</div>
</div>
            </>
        )
    }
}

export default Register