import React,{Component} from "react";
import './Search.css'
import Header from '../../Header';
import { withRouter } from "react-router-dom";
const lurl = "https://myzom-app.herokuapp.com/location";
let rUrl = "https://myzom-app.herokuapp.com/restaurants?stateId="

class Search extends Component{
  constructor(props){
    super(props)
    console.log(">>>>inside constructor")
    this.state={
        location:'',
        restaurant:''
    }
}

renderCity = (data) => {
    if(data){
        return data.map((item) => {
            return(
                <option value={item.state_id} key={item.state_id}>{item.state}</option>
            )
        })
    }
}

handleCity=(event) => {
    let stateId = event.target.value;
    fetch(`${rUrl}${stateId}`,{method:'GET'})
    .then((res) =>  res.json())
    .then((data) => {
        this.setState({restaurant:data})
    })
}

renderRest=(data)=>{
  if(data){
      return data.map((item) => {
          return(
              <option value={item.restaurant_id} key={item.restaurant_id}>
                  {item.restaurant_name} | {item.address}
              </option>
          )
      })
  }
}
handleRest=(event)=>{
  this.props.history.push(`details?restId=${event.target.value}`)
}


    render(){
        return(
           <div>
            <Header/>
           <div className="MySearch">

           <div id="container">
      <div id="heading">
        <h1 id="size"> Zomato</h1>
        <h2 class="rb"> Discover the best food & drinks here</h2>
      </div>

      <div class="dropdown1">
        <select onChange={this.handleCity}>
          <option>----SELECT YOUR CITY----</option>
          {this.renderCity(this.state.location)}
          
        </select>
        <select className="restSelect" onChange={this.handleRest}>
          <option>----SELECT YOUR RESTAURANTS----</option>
          {this.renderRest(this.state.restaurant)}
        </select>
      </div>

    </div>
                </div>
    </div>
           
         
        )
    }
    
    //api calling on page load 
    componentDidMount(){
      fetch(lurl,{method:'GET'})
      .then((res) => res.json())
      .then((data) => {
          this.setState({location:data})
      })
  }
}

export default withRouter(Search);