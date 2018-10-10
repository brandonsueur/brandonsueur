import React from 'react'
import Markdown from 'react-remarkable'

import { format } from 'date-fns'
import { api } from '../../api.js'

import "./PostsList.css"
import { link } from 'fs';

class PostsList extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    posts: []
  }

  componentDidMount() {
    api.get('/posts/')
      .then(res => {
        const posts = res.data.posts

        console.log(posts)

        this.setState({
          isLoaded: true,
          posts
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
    const posts = this.state.posts

    const date = format(posts.created_at, 'MM/DD/YYYY')

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="container">
          <section className="posts">
            <p>Chargement...</p>
          </section>
        </div>
      )
    } else {
      return (
        <div className="container">
          <section className="posts">
            <h2>Articles</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eos obcaecati molestiae iusto odit est voluptas pariatur,
              suscipit ullam modi optio sequi alias ex ratione non! Nesciunt aliquid amet ut.</p>        

            <div className="posts-list">
              {/* your list */}
            </div>
          </section>
        </div>
      );
    }
  }
}

export default PostsList