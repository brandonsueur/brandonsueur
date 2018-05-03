
import React, { Component } from 'react'

class Contact extends Component{

    render() {
        return(
            <section id="contact">
                <div class="container">

                    <div class="center">
                        <span>Je vous intéresse ? Contactez moi !</span>
                        <a href="mailto:brandon.sueur@outlook.fr">brandon.sueur@outlook.fr</a>
                        <span>À bientôt !</span>

                        <img src="assets/img/emoji/smile.png" alt="" />
                    </div>

                    <ul class="social-icons">
                        <li>
                            <a target="_blank" href="https://dribbble.com/brandonsueur">
                                <i class="fa fa-dribbble"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://twitter.com/gynidark">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/brandonsueur/">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://medium.com/@brandonsueur">
                                <i class="fa fa-medium"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://github.com/brandonsueur">
                                <i class="fa fa-github"></i>
                            </a>
                        </li>

                        <i class="fab fa-medium-m"></i>

                    </ul>
                </div>
            </section>
        )
    }
}

export default Contact;
