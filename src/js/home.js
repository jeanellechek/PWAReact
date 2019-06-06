import React, { Component } from 'react';
import bookImg from '../images/books.png';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <h3> Stay Up to Date with R-I-L </h3>
                    <img className="profile-pic" src={bookImg} alt="Hello, World!" />

                    <p className="home-note">Latest Commits on Resources I like!</p>
                </section>

            </div>
        );
    }
}

export default Home;