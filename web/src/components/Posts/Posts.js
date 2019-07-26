import React from 'react';

import './Posts.scss';
import Button from '../Button/Button';

const Posts = () => {
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
          <div className="col-sm-6 col-md-4">
            <div className="post">
              <img
                src="https://images.unsplash.com/uploads/1413548921627cb0e00f3/80652197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                alt=""
              />

              <h3>J'ai arrêté les cours à 18 ans</h3>
              <span className="date">26 février 2019</span>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="post">
              <img
                src="https://images.unsplash.com/photo-1503852460961-aa7ffdd3d64d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                alt=""
              />

              <h3>J'ai arrêté les cours à 18 ans</h3>
              <span className="date">03 décembre 2018</span>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="post">
              <img
                src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                alt=""
              />

              <h3>Je reprends l’open-source !</h3>
              <span className="date">14 mai 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
