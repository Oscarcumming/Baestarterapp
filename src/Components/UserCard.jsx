import "./UserCard.css";
import { Card, ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Container } from "react-bootstrap";

// userName={this.state.userName}
//           avatar_url={this.state.avatar_url}
//           bio = {this.state.bio}
//           company = {this.state.company}
//           location = {this.state.location}

function UserCard(props) {
  return (
    <Container fluid="md">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.avatar_url} />
        <Card.Body>
          <Card.Title>{props.userName}</Card.Title>
          <Card.Text>{props.bio}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.location}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserCard;
