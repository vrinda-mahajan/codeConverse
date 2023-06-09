import React from 'react';
import '../../styles/Showcase.scss';
import { v4 as uuidv4 } from 'uuid';

function Showcase() {
  return (
    <div className="showcase-area">
      <div className="content-area">
        <div className="join-area">
          <h1 className="content-title">Code and Converse Anytime Anywhere</h1>
          <p className="content-text">Enjoy fast video meetings, code and chat with your friends, teams and family without the hassle of logging in. And that too for free!!</p>
          <a href={`/room/${uuidv4()}`} id="join-button" >Join Meeting</a>
        </div>
        <div className="about-area">
          <h1 className="about-title">Features of Code Converse</h1>
          <ul style={{padding: '2rem 0'}}>
            <li className="about-item">
              <div className="list-icon-area">
                <i className="fas fa-tv list-icon"></i>
              </div>
              <p className="list-text">
                Enter into a video call anytime <br/> 24 x 7
              </p>
            </li>
            <li className="about-item">
              <div className="list-icon-area">
                <i className="fas fa-users list-icon"></i>
              </div>
              <p className="list-text">
                Organize a meeting with<br/> multiple people 
              </p>
            </li>
            <li className="about-item">
              <div className="list-icon-area">
                <i className="fas fa-comment-dots list-icon"></i>
              </div>
              <p className="list-text">
                Chat and share your thoughts <br/> realtime
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Showcase;