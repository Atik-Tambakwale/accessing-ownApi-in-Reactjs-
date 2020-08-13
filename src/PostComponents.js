/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable */
import React, { Component, Fragment } from "react";
class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}
	async componentDidMount() {
		let res = await window.fetch("http://localhost:5000/api/posts/all-posts");
		let data = await res.json();
		this.setState({ posts: data.posts });


	}

	render() {
		return (
			<Fragment>
				{this.state.posts.map((post) => (
					<div key={post._id}>
						<h1>{post.title}</h1>
						<p>{post.details}</p>
					</div>
				))}
			</Fragment>
		);
	}
}

export default Posts;