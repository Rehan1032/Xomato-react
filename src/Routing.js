import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/listing/listingApi'
import details from './Component/details/details'
import placeOrder from './Component/booking/placeOrder'
import viewOrder from './Component/booking/viewOrder'
import Login from './Component/login/login';
import Register from './Component/login/register'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
              
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listing/:mealId" component={Listing}/>
                    <Route exact path="/details" component={details}/>
                    <Route exact path="/placeOrder/:restName"component={placeOrder}/>
                    <Route exact path="/viewOrders" component={viewOrder}/>
                    <Route exact path="/login"component={Login}/>
                    <Route exact path="/register" component={Register}/>
                   
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;