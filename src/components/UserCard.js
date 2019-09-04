import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

class UserCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: this.props.name
  //   };
  // }

  render() {
    console.log(this.props.person);
    return (
      <Grid.Column>
        <Card>
          <Image src={this.props.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
              <span className="date">{this.props.name}</span>
            </Card.Meta>
            <Card.Description>
              Profile: <a href={this.props.profile}>{this.props.profile}</a>
            </Card.Description>
            <Card.Description>{this.props.bio} </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={this.props.followers_url}>
              <Icon name="user" />
              {this.props.followers}
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default UserCard;
