import React, { Component } from 'react';
import { connect } from 'react-redux';
import {robots} from '../components/robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../Action';

const mapStateToProps = (state) => {
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	
	componentDidMount(){
		
		this.props.onRequestRobots();
	}
	
	// onSearch = (event) => {
	// 	// console.log(event.target.value);
	// 	this.setState({searchfield:event.target.value});
	// 	//console.log(this.state.searchfield);
	// }
	
	render()
	{
		const { searchField, onSearchChange, robots, isPending } = this.props;
		
		const filteredFriends = robots.filter((robots) => {
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		});
		
		if(isPending)
		{
			return (
				<h1 className="tc">Loading</h1>
			);
		}
		else
		{	
			return (
				<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				<ErrorBoundary>
				<CardList  robots={filteredFriends} />
				</ErrorBoundary>
				</Scroll>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);