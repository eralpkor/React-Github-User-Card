import React, { Component } from "react";
import UserCard from "./UserCard";

class UserList extends Component {
  // constructor(props) {
  // super(props);
  state = {
    username: "",
    name: "",
    avatar_url: "",
    location: "",
    followers: "0",
    isLoading: true
  };
  // }

  componentDidMount() {
    const url = "https://api.github.com/users/eralpkor";
    fetch(url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          name: res.name,
          username: res.login,
          location: res.location,
          avatar_url: res.avatar_url
        })
      )
      // .then(res => console.log(res))

      .catch(err => console.log("Sorry", err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.login}</h1>
        <h3>{this.state.followers}</h3>
        <p>{this.state.location}</p>

        <img src={this.state.avatar_url} alt="something" />
        <UserCard />
      </div>
    );
  }
}

export default UserList;
