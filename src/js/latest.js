import React, { Component } from 'react';
import '../css/style.css';

class Latest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
        }
        this.app = {
            spinner: document.querySelector('.loader')
        };

        this.container = document.querySelector('.this.container');
        this.commitContainer = ['.first', '.second', '.third', '.fourth', '.fifth'];
        this.posData = ['first', 'second', 'third', 'fourth', 'fifth'];

        this.state = {
            filling: false,
        }

    }
    storageAvailable(type) {
        try {
            var storage = window[type],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return false;
        }
    }


    componentDidMount() {
        if (this.storageAvailable('localStorage')) {
            if (localStorage.getItem('commitData') === null) {
                /* The user is using the app for the first time, or the user has not
                 * saved any commit data, so show the user some fake data.
                 */
                this.fetchCommits();
                console.log("Fetch from API");
            } else {
                this.fetchCommitsFromLocalStorage(localStorage.getItem('commitData'));
                console.log("Fetch from Local Storage");
            }
        }
        else {
            console.log("We can't cache your app data yet..");
        }
    }


    // Get Commit Data from Github API
    fetchCommits() {
        var url = 'https://api.github.com/repos/unicodeveloper/resources-i-like/commits';

        fetch(url)
            .then(function (fetchResponse) {
                return fetchResponse.json();
            })
            .then(function (response) {
                console.log("Response from Github", response);

                var commitData = {};

                for (var i = 0; i < this.posData.length; i++) {
                    commitData[this.posData[i]] = {
                        message: response[i].commit.message,
                        author: response[i].commit.author.name,
                        time: response[i].commit.author.date,
                        link: response[i].html_url
                    };
                }

                localStorage.setItem('commitData', JSON.stringify(commitData));

                for (var i = 0; i < this.commitContainer.length; i++) {

                    this.container.querySelector("" + this.commitContainer[i]).innerHTML =
                        "<h4> Message: " + response[i].commit.message + "</h4>" +
                        "<h4> Author: " + response[i].commit.author.name + "</h4>" +
                        "<h4> Time committed: " + (new Date(response[i].commit.author.date)).toUTCString() + "</h4>" +
                        "<h4>" + "<a href='" + response[i].html_url + "'>Click me to see more!</a>" + "</h4>";

                }

                this.app.spinner.setAttribute('hidden', true); // hide spinner
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    // Get the commits Data from the Web Storage
    fetchCommitsFromLocalStorage(data) {
        var cardSection = document.getElementsByClassName("container");
        var localData = JSON.parse(data);
        //  this.app.spinner.setAttribute('hidden', true); //hide spinner
        var cardDetails = "";

        for (var i = 0; i < this.commitContainer.length; i++) {
            cardDetails +=
                "<section class='card'>" +
                "<h4> Message: " + localData[i].message + "</h4>" +
                "<h4> Author: " + localData[i].author + "</h4>" +
                "<h4> Time committed: " + (new Date(localData[i].time)).toUTCString() + "</h4>" +
                "<h4>" + "<a href='" + localData[i].link + "'>Click me to see more!</a>" + "</h4>" +
                "</section>";
        }
        this.setState({ filling: cardDetails });
    };

    render() {
        return (
            <div>

                <section className="card_container">
                    <h2>Latest Commits!</h2>

                    <div className="container" dangerouslySetInnerHTML={{ __html: this.state.filling }}>
                    </div>

                </section>
                {(this.state.loader === true ? <div className="loader">
                    <svg viewBox="0 0 32 32" width="32" height="32">
                        <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
                    </svg>
                </div> : null)}

            </div>
        );
    }
}

export default Latest;