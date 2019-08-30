/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Moment, { now } from 'react-moment';
import axios from 'axios';
import 'moment/locale/fr';

import './Posts.scss';
import Loading from '../Loading/Loading';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get('http://localhost:8000/posts')
        .then(res => {
          // get just lasts posts
          const hasPosts = window.location.pathname === '/articles';

          this.setState({
            posts: hasPosts ? res.data.data : res.data.data.slice(0, 6),
            loading: false
          });
        })
        .catch(err => console.log(err));
    });
  }

  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => {
      const { id, title, image, created_at } = post;

      return (
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="post">
            <Link to={`/articles/${id}`}>
              <div
                className="post-img"
                style={{ backgroundImage: `url(${image})` }}
              />

              <h3>{title}</h3>
            </Link>
            <span className="date">
              <Moment to={created_at}>{now}</Moment>
            </span>
          </div>
        </div>
      );
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <section className="posts">
        <div className="container">
          <div className="title">
            <span>Mes derniers articles</span>
            <h1>
              Concernant le développement,
              <br />
              ma vie et puis le design.
            </h1>
          </div>

          <div className="row">
            {loading ? <Loading /> : this.renderPosts()}
          </div>
        </div>
      </section>
    );
  }
}

export default Posts;
