import React from 'react';
import QuickSearch from './QuickSearch';
import Search from './Search';


const Home = () => {

   
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
        
    )
}

export default Home;