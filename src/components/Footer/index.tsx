import { Container } from './styles';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <small>cgbordin.com © {year} - São Paulo - SP</small>
    </Container>
  );
};

export default Footer;
