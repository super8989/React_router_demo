import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";
import "./App.css";

const Lover = () => <h1>I Love Dogs!</h1>;

class App extends Component {
	render() {
		return (
			<div className='App'>
				<nav className='App-nav'>
					<Link to='/'>About</Link>
					<Link to='/dog'>Dog</Link>
					<Link to='/contact'>Contact</Link>
					<a href='/dog'>Dog</a>
					<a href='/contact'>Contact</a>
					<a href='/'>About</a>
				</nav>
				<Switch>
					<Route exact path='/' component={About} />
					<Route exact path='/dog' component={Dog} />
					<Route exact path='/dog/lover' component={Lover} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
