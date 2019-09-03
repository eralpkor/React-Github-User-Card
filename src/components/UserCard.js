import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: this.props.avatar_url
    };
  }

  render() {
    console.log(this.state.avatar_url);
    return (
      <Grid.Column>
        <Card>
          <Image src={this.props.avatar_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>HELLO</Card.Header>
            <Card.Meta>
              <span className="date">Some shit</span>
            </Card.Meta>
            <Card.Description>Location: </Card.Description>
            <Card.Description>Origin: </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Episodes
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default UserCard;
