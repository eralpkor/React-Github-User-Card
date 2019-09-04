import React, { Component } from "react";
import axios from "axios";
import { Button, Grid, Image } from "semantic-ui-react";

import UserCard from "./UserCard";
import "./UserList.css";

const userName = "eralpkor";
const url = `https://api.github.com/users/`;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      followers: []
    };
    this.getFollowers = this.getFollowers.bind(this);
  }

  async componentDidMount() {
    let gitUser = await axios.get(`${url}${userName}`);
    let followersUrl = await axios.get(`${url}${userName}/followers`);
    // let gitUsers = await followersUrl.data.map(user => user.login);
    // console.log(gitUsers);
    this.setState({
      users: gitUser.data,
      followers: followersUrl.data
    });
    console.log(followersUrl.data);
  }

  async getFollowers() {
    // let loginId = this.state.users.login;
    // let followersUrl = `${loginId}/followers`;
    let followersRes = await axios.get(
      "https://api.github.com/users/eralpkor/followers"
    );
    console.log(followersRes.data);
    let follow = followersRes.data;
    this.setState(st => ({
      followers: [
        ...st.followers,
        {
          name: follow.name,
          image: follow.avatar_url
        }
      ]
    }));
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={5}>
            <Image
              src={this.state.users.avatar_url}
              alt={this.state.users.name}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>{this.state.users.name}</h1>
            <h3>{this.state.users.login}</h3>

            <h3>Followers: {this.state.users.followers}</h3>
            <a href={this.state.users.html_url}>
              Profile: {this.state.users.html_url}
            </a>
            <p>Location: {this.state.users.location}</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button onClick={this.getFollowers} positive>
              Followers {this.state.users.followers}
            </Button>
          </Grid.Column>
        </Grid>
        <div className="spacer"></div>

        <section className="character-list grid-view">
          <Grid container columns={3}>
            {this.state.followers.map(p => {
              return (
                <UserCard
                  name={p.login}
                  image={p.avatar_url}
                  followers={p.followers_url.length}
                  profile={p.html_url}
                  followers_url={p.followers_url}
                  key={p.id}
                />
              );
            })}
          </Grid>
        </section>
      </div>
    );
  }
}

export default UserList;
