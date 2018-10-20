import React from 'react'

import { format } from 'date-fns'
import frLocale from 'date-fns/locale/fr'

import "./PostsList.css"

class PostsList extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    posts: []
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
      posts: {
        title: 'toto'
      }
    })
  }

  render() {
    const { error, isLoaded } = this.state;
    const posts = this.state.posts

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

            <p>Je partage avec vous mon expérience, mes ambitions et quelques conseils à travers mes articles.</p>        

            <div className="posts-list">
              {posts.map((post, i) => (
                <div key={post.uuid} className="post">
                  <h3>
                    <a rel="noopener noreferrer" href={window.location.href + '/' + post.slug}>
                      {post.title}
                    </a>
                  </h3>

                  <span className="date">Créé le {format(post.created_at, 'DD MMMM YYYY', { locale: frLocale })}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }
  }
}

export default PostsList