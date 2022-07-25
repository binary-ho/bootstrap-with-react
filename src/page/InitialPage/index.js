import React, { Component } from 'react';
import Buttons from '../../components/common/buttons';
import styled from 'styled-components';

const PageWarraper = styled.div`
  width: 100%;
  height: 100%;
  fontSize: 100px;
`;


class InitialPage extends Component {
  render() {
    return (
      <PageWarraper>dfdsdsf
        <Buttons />
      </PageWarraper>
    )
  }
}
export default InitialPage;
