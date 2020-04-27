import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class Author extends Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}
	render() {
		console.log(this.props);
		const { user } = this.props;
		if (!user) return null;

		// console.log(user.name);
		return <p>{user.name}</p>;
	}
}
const mapStateToProps = (state, ownProps) => {
	// the second argument obj is a reference to the props pass to the component
	// console.log(state);
	// console.log(ownProps);
	const user = state.users.find((user) => user.id === ownProps.userId);
	return {
		user
	};
};

export default connect(mapStateToProps, { fetchUser })(Author);
