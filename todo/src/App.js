import React, { Component } from 'react';
import Persons from './Persons';
import AddPerson from './AddPerson';
import './App.css';

class App extends Component {
	state = {
		persons: [
			{ name: 'Ryu', age: 30, belt: 'black', id: 1 },
			{ name: 'Yoshi', age: 20, belt: 'green', id: 2 },
			{ name: 'Crystal', age: 25, belt: 'pink', id: 3 },
		]
	}

	addPerson = (person) => {
		person.id = Math.random();
		let persons = [...this.state.persons, person];
		this.setState({
			persons: persons
		})
	}

	render() {
		return (
			<div className="App">
				<h1>My first React app</h1>
				<p>Welcome!</p>
				<Persons persons={ this.state.persons } />
				<AddPerson addPerson={this.addPerson}/>
			</div>
		)
	}
}

export default App;
