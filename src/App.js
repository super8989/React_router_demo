import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
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
					<NavLink exact activeClassName='active-link' to='/'>
						About
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/dog'>
						Dog
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/dog/c'>
						Dog(C)
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/dog/r'>
						Dog(R)
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/contact'>
						Contact
					</NavLink>
				</nav>
				<Switch>
					<Route exact path='/' component={About} />
					<Route exact path='/dog/c' component={() => <Dog name='Muffin' />} />
					<Route exact path='/dog/r' render={() => <Dog name='Biscuit' />} />
					<Route exact path='/dog/lover' component={Lover} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
