/* eslint-disable camelcase */
import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import 'moment/locale/fr';

import './Posts.scss';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/posts')
      .then(res => {
        console.log(res.data.data);

        this.setState({
          posts: res.data.data.slice(0, 6),
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => {
      const { title, image, created_at } = post;

      return (
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="post">
            <div
              className="post-img"
              style={{ backgroundImage: `url(${image})` }}
            />

            <a href="https://google.fr">
              <h3>{title}</h3>
            </a>
            <span className="date">
              <Moment to="2015-04-19">{created_at}</Moment>
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
            {loading ? 'Chargement...' : this.renderPosts()}
          </div>
        </div>
      </section>
    );
  }
}

// const Posts = () => {
//   return (
//     <section className="posts">
//       <div className="container">
//         <div className="title">
//           <span>Mes derniers articles</span>
//           <h1>
//             Concernant le développement,
//             <br />
//             ma vie et puis le design.
//           </h1>
//         </div>

//         <div className="row">
//           <div className="col-xs-12 col-sm-6 col-md-4">
//             <div className="post">
//               <img
//                 src="https://images.unsplash.com/uploads/1413548921627cb0e00f3/80652197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
//                 alt=""
//               />

//               <h3>J'ai arrêté les cours à 18 ans</h3>
//               <span className="date">26 février 2019</span>
//             </div>
//           </div>

//           <div className="col-xs-12 col-sm-6 col-md-4">
//             <div className="post">
//               <img
//                 src="https://images.unsplash.com/photo-1503852460961-aa7ffdd3d64d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
//                 alt=""
//               />

//               <h3>Pourquoi j'aime les produits Apple !</h3>
//               <span className="date">03 décembre 2018</span>
//             </div>
//           </div>

//           <div className="col-xs-12 col-sm-6 col-md-4">
//             <div className="post">
//               <img
//                 src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
//                 alt=""
//               />

//               <h3>Je reprends l’open-source !</h3>
//               <span className="date">14 mai 2018</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Posts;
