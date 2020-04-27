import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import Author from "./AuthorName";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		const { posts } = this.props;
		if (posts.length === 0) return <div>loading!</div>;
		// console.log(posts);
		return posts.map((post) => {
			return (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<Author userId={post.userId} />
				</div>
			);
		});
	}
	render() {
		// const { posts } = this.props;
		// if (posts.length === 0) return <div>loading!</div>;
		// console.log(posts);
		return <div>{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
