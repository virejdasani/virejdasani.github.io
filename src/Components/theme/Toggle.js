import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  width: 5em;
  height: 35px;
  border: 0.125em solid ${({ theme: { text } }) => text};
  border-radius: 1.5em;
  margin-top: 2px;
  padding: 0.125em;
  overflow: hidden;
  background: ${({ theme: { body } }) => body};
  cursor: pointer;
  outline: none;
  transition: all 0.3s linear;
  border: solid 0.12em #f5f5f5;
  background: transparent;
  margin-left: 10px;
`;

const Switch = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;

  position: relative;
  transform: ${({ theme: { name } }) =>
    name === "light" ? "translateX(0)" : "translateX(2.5em)"};
  transition: inherit;

  box-shadow: ${({ theme: { name } }) =>
    name === "light"
      ? "inset 6px -2px 0 2px #fff;"
      : "inset -12px  92px 0 1px #fff;"};
}
`;

const Toggle = ({ onToggle }) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <Switch />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;
