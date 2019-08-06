/* eslint-disable camelcase */
import React, { Component } from 'react';
import axios from 'axios';
import Moment, { now } from 'react-moment';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import 'moment/locale/fr';

import './Post.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      isLoading: false
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const uuid = url.replace('/articles/', '');

    this.setState({ isLoading: true });

    axios
      .get(`http://localhost:8000/posts/${uuid}`)
      .then(res => {
        this.setState({
          post: res.data.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { post, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="post container">
        <div className="post-header">
          <h1>{post.title}</h1>

          <p>
            <Moment to={post.created_at}>{now}</Moment>
          </p>

          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-content">{ReactHtmlParser(post.content)}</div>
      </div>
    );
  }
}

export default Post;
