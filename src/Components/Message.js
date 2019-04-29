import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
