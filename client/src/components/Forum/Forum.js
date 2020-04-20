import React from 'react';
import './Forum.css'

  
  const threads = [
    {
      userId: "2",
      username: "bob",
      topicName: "cats",
      content: "cats are cool",
      date: Date.now(),
    },
    {
      userId: "3",
      username: "bob",
      topicName: "cats",
      content: "cats are cool",
      date: Date.now(),
    },
    {
      userId: "2",
      username: "bob",
      topicName: "dogs",
      content: "dogs are also cool",
      date: Date.now(),
    },
    {
      userId: "5",
      username: "tennis_jasmine",
      topicName: "tennis",
      content: "tennis rackets cool",
      date: Date.now(),
    },
    {
      userId: "1",
      username: "yahoo",
      topicName: "internet",
      content: "yahoo was  always cool",
      date: Date.now(),
    },
  ];

  class Forum extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        threads: []
      };
     
    }

  
    
    render() {
      
  
      return (
        <div className="topics-container">
            <header className="topics-header">Halo</header>
            <p>stuff and things about stuff</p>
            <div>
          {threads.length > 0 &&
            threads.map((thread) => {
              return (
                <div className="forum-container">
                  <p className="user-name">{thread.username}</p>
                  <p className="topic-name">{thread.topicName}</p>
                </div>
              );
            })}
        </div>
        </div>
      );
    }
  }
  
  export default Forum;
  