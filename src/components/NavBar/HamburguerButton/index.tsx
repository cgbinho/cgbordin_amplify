import { StyledHamburger } from './styles';

export type Props = {
  openBurguer: boolean;
  setOpenBurguer: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
  <StyledHamburger
    open={props.openBurguer}
    onClick={() => props.setOpenBurguer(!props.openBurguer)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger;
