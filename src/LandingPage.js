import React, { Component } from "react";
import UserSignUp from "./UserSignUp/UserSignUp";
import ListContext from "./ListContext";

class LandingPage extends Component {
  static contextType = ListContext;

  render () {
    return (
      <div className='main_content'>
      <section>
        <header>
            <h3>Create a review</h3>
        </header>
        <p>[<em>placeholder for screenshot of review creation interface</em>]</p>
        <p>With all the streaming services today, I'm sure you've got quite a long list of favorites. With Reviewstream you can add them to your account and leave a review. You can also visit your review at any time and make an update</p>
      </section>

      <section>
        <header>
            <h3>View Your Reviews</h3>
        </header>
        <p>[<em>placeholder for screenshot of reviews list</em>]</p>
        <p>View all of your saved reviews in one place.</p>
      </section>
        <UserSignUp />
    <footer className="footer">&copy;2019 Danielle Hutchings</footer>
    </div>
    );
  }

}

export default LandingPage;