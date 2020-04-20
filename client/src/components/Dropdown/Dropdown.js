import React from "react";
import "./Dropdown.css";
import { Col, Row, Container } from "../Grid";
import HomeExtra from "../HomeExtra"

//dummy data -- delete after you sync to database
const loggedInUser = {
  userId: "2",
  name: "Bob",
  password: "cats",
  date: Date.now(),
};

const comments = [
  {
    userId: "1",
    threadId: "1",
    comment: "this is cool",
    date: Date.now(),
  },
  {
    userId: "1",
    threadId: "3",
    comment: "this is cats",
    date: Date.now(),
  },
  {
    userId: "2",
    threadId: "3",
    comment: "JS is cool",
    date: Date.now(),
  },
  {
    userId: "5",
    threadId: "3",
    comment: "python is cooler",
    date: Date.now(),
  },
];

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

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      favorites: [],
      threads: [],
      currentPage: "posts",
    };
    this.handlePosts = this.handlePosts.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleThreads = this.handleThreads.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  handlePosts() {
    this.setState({ currentPage: "posts" });
    const posts = comments
      .filter((commentInfo) => commentInfo.userId === loggedInUser.userId)
      .map((commentObj) => commentObj.comment);

    this.setState({ posts });
  }

  handleThreads() {
    this.setState({ currentPage: "threads" });

    const threadResults = threads.filter(
      (threadInfo) => threadInfo.userId === loggedInUser.userId
    );

    this.setState({ threads: threadResults });
  }

  handleUser() {
    this.setState({ currentPage: "user" });
  }

  renderContent() {
    const { currentPage, posts } = this.state;

    if (currentPage === "posts") {
      return (
        <div>
          {posts.map((post) => {
            return <p>{post}</p>;
          })}
        </div>
      );
    } else if (currentPage === "favorites") {
    } else if (currentPage === "threads") {
      return (
        <div>
          {threads.length > 0 &&
            threads.map((thread) => {
              return (
                <div>
                  <p>{thread.topicName}</p>
                  <p>{thread.content}</p>
                </div>
              );
            })}
        </div>
      );
    } else if (currentPage === "user") {
      return (
        <div>
          <p>Hello {loggedInUser.name}</p>
          <p>Your username is {loggedInUser.username}</p>
        </div>
      );
    }
  }

  render() {
    const { posts, favorites, threads } = this.state;

    return (

      <Container fluid>
        <Row>
          <Col size="md-1" />
          <Col size="md-3">
          <HomeExtra>
            <Row>
              <Col size="md-12">
                <a href="#" onClick={this.handlePosts} className="btn btn-primary">
                  Posts
                </a>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <a href="#" onClick={this.handleThreads} className="btn btn-primary" >
                  Threads
                </a>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <a onClick={this.handleUser} href="#" className="btn btn-primary">
                  User
                </a>
              </Col>
            </Row>
          </HomeExtra>
          </Col>
          <Col size="md-1"/>

          <Col size="md-6">
          <HomeExtra>
            <Row>
              <Col size="md-12" >
                <p>{this.renderContent()}</p>
              </Col>
            </Row>
          </HomeExtra>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dropdown;
