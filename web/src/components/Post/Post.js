/* eslint-disable camelcase */
import React, { Component } from 'react';
import axios from 'axios';
import Moment, { now } from 'react-moment';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import 'moment/locale/fr';

import Button from '../Button/Button';

import './Post.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      notFound: false
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const uuid = url.replace('/articles/', '');

    axios
      .get(`http://localhost:8000/posts/${uuid}`)
      .then(res => {
        this.setState({
          post: res.data.data
        });
      })
      .catch(err => {
        this.setState({ notFound: true });
      });
  }

  render() {
    const { post, notFound } = this.state;

    if (notFound) {
      return (
        <div className="notfound" style={{ textAlign: 'center' }}>
          <h1>
            Oops! La page que vous recherchez n'existe pas.{' '}
            <span role="img" aria-label="sad">
              🥺
            </span>
          </h1>
          <p>
            En tapant{' '}
            <strong style={{ fontWeight: 500 }}>
              {window.location.pathname}
            </strong>{' '}
            vous avez peut-être <br />
            mal saisi l'adresse ou la page a été déplacée.
            <span style={{ fontSize: '20px' }} role="img" aria-label="lel">
              {' '}
              🤷‍♂️
            </span>
          </p>

          <Link to="/">
            <Button text="Retourner à l'accueil" />
          </Link>
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="post-header">
            <h1>{post.title}</h1>

            <p>
              <Moment to={post.created_at}>{now}</Moment>
            </p>

            <img src={post.image} alt={post.title} />
          </div>

          <div className="post-content">{ReactHtmlParser(post.content)}</div>
        </div>
      </div>
    );
  }
}

export default Post;
