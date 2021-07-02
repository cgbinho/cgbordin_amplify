import styled, { keyframes } from 'styled-components';

interface IContainerProps {
  width: string;
  height: string;
  padding: string;
  primary?: boolean;
}

export const Container = styled.button<IContainerProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => (props.primary ? 'white' : `var(--scent-250)`)};
  background: ${(props) =>
    props.primary ? `var(--scent-450)` : `hsl(200, 100%, 90%)`};

  border: none;
  border-radius: 0.4rem;
  box-shadow: 1px 1px 8px var(--scent-250);
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.primary ? `var(--scent-350)` : `var(--scent-650)`};
    color: ${(props) => (props.primary ? 'white' : `var(--scent-250)`)};
  }

  &:active {
    transform: translateY(1px);
    transition: all 0.2s ease 0s;
  }

  &:disabled {
    cursor: default;
    transform: translateY(0px);
    color: var(--dark_gray);
    box-shadow: 0px 0px 0px var(--scent-250);
    border: 2px solid var(--light_gray);
    background: #efefef;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--secondary);
  border-right: 2px solid var(--secondary);
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const ButtonWithIcon = styled(Container)`
  svg {
    margin-right: 8px;
  }
`;
