import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import UncontrolledExample from "../Carousel";

const WebBox = styled.div `
  height: 100%;
  width: 100%;
  height: calc(100%);
`;

class Buttons extends Component {
  render() {
    return (
      <WebBox>
        <UncontrolledExample />
        <Button variant="btn btn-primary">Primary</Button>
        <Button variant="btn btn-success">Success</Button>
        <Button variant="btn btn-info">Info</Button>
        <Button variant="btn btn-warning">Warning</Button>
        <Button variant="btn btn-danger">Danger</Button>
        <Button variant="btn btn-default">Default</Button>
      </WebBox>
    );
  }
}

export default Buttons;