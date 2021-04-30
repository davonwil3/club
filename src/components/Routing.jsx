import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import AboutUs from "./AboutUs";
import Music from "./Music"
import Stars from "./Stars";
import Footer from "./footer";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';


function Routing(){



return(
<Router>
<Provider store={store}>
  <Switch>
<Route path="/" exact component={Home}></Route>
<Route path="/reserve" exact component={Form}></Route>
</Switch>
</Provider>



</Router>
)
}

function Home(){


return(
<div>
<Heading/>
<AboutUs/>
<Stars/>
<Music/>
<Footer/>
</div>
)
}


export default Routing;
