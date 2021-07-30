import styled from 'styled-components';
import Button from '../../Form/Button';

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: var(--gray-100);
  z-index: 1;
  text-align: center;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  border-radius: 0;

  .logged_indicator {
    margin-bottom: 1rem;
    padding: 1rem 4rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const StyledLink = styled.a`
  padding: 0 3rem;
  font-size: 1.5rem;
  color: var(--primary);
  text-decoration: none;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    color: var(--scent-650);
  }
`;

export const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem;
`;
