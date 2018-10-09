import React from 'react'
import Markdown from 'react-remarkable'

import { format } from 'date-fns'
import { api } from '../../api.js'

import "./Post.css"

class Post extends React.Component {
	state = {
    post: []
  }

  componentDidMount() {
    api.get('/posts/' + this.props.match.params.slug)
			.then(res => {
				const post = res.data.post[0]

				this.setState({ post })
			})
			.catch(function (error) {
		    console.log(error);
		  });
  }

	render() {
		const { title, content, created_at } = this.state.post
		const date = format(created_at, 'MM/DD/YYYY')

		return (
			<div className="container">
        <section className="post">
          <h2>{ title }</h2>

          <div className="content">
						<Markdown source={content} />
					</div>

					<footer>
						<span>Créé le { date }.</span>
					</footer>
        </section>
      </div>
		)
	}
}

export default Post
