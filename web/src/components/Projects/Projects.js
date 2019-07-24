import React from 'react';

import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="title">
              <span>Mes projets</span>
              <h1>
                Des produits, pour rendre le monde meilleur (mais pas que){' '}
                <span role="img" aria-label="like">
                  😎
                </span>
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quam fugit veritatis, eius temporibus nisi explicabo ipsam veniam
              sapiente ex dolorum sed accusamus quos quae repellat pariatur
              excepturi in deserunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, fuga earum ipsa animi laudantium minus optio est
              deleniti reiciendis ipsam tenetur officiis commodi. Quia quas non
              et voluptatibus quis distinctio.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate autem in dolore, nihil vero sapiente nostrum voluptates
              beatae laudantium laborum debitis culpa voluptatum quo natus quod
              ratione fuga eum doloremque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
