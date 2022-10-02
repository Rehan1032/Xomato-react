import React from 'react';
import QuickSearch from './QuickSearch';
import Search from './Search';
import TopCollections from './Topcollection';


const Home = () => {

   
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
            <TopCollections/>
        </React.Fragment>
        
    )
}

export default Home;