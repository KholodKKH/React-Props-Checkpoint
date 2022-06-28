import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
const ProfileComponent = (props) => {
  return (
    <>
     <Card style={{ width: '18rem' }}>
        <span>{props.children}</span>
      <Card.Body>
        <button onClick={() => props.handleName(props.name)}>
            Click Me To Know Who I am ?
        </button>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.profession}</Card.Text>
        <Card.Text>{props.bio}</Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};
export default ProfileComponent;
ProfileComponent.defaultProps = {
  name: "Kholod",
  bio: "systems engineering",
};
ProfileComponent.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
};