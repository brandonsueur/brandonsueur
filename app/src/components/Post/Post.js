import React from 'react'
import Markdown from 'react-remarkable'

import { format } from 'date-fns'
import { api } from '../../api.js'

import "./Post.css"

class Post extends React.Component {
	state = {
		error: null,
		isLoaded: false,
    post: []
  }

  componentDidMount() {
    api.get('/posts/' + this.props.match.params.slug)
			.then(res => {
				const post = res.data.post[0]

				this.setState({
					isLoaded: true,
					post
				})
			})

			.catch(function (error) {
				this.setState({
					isLoaded: true,
					error
				});
		  });
  }

	render() {
		const { error, isLoaded } = this.state;
		const { title, content, created_at } = this.state.post

		const date = format(created_at, 'MM/DD/YYYY')

		if(error) {
			return <div>Error: {error.message}</div>;
		}else if (!isLoaded){
			return (
				<div className="container">
					<section className="post">
						<p>Chargement...</p>
					</section>
				</div>
			)
		}else{
			return (
				<div className="container">
					<section className="post">
						<h2>{title}</h2>

						<div className="content">
							<Markdown source={content} />
						</div>

						<footer>
							<span>Créé le {date}.</span>
						</footer>
					</section>
				</div>
			);
		}
	}
}

export default Post
