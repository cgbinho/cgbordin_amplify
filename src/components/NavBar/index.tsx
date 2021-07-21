import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/auth';
import { Container, BurguerContainer, SignedContainer } from './styles';
import Logo from '../Logos';
import Button from '../Form/Button';
import HamburgerButton from './HamburguerButton';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { HamburguerMenu } from './HamburguerMenu';
import { useRouter } from 'next/router';
import { GoSignOut } from 'react-icons/go';
import { DropdownUserMenu } from '../Form/DropdownUserMenu';

const NavBar = () => {
  const router = useRouter();

  const { locale } = router;

  const contentNavbar = {
    en: {
      home: 'Home',
      articles: 'Articles',
      projects: 'Projects',
      aepzera: 'Aepzera',
      about: 'About',
      sign_in: 'Sign In',
      sign_up: 'Sign Up',
      orders: 'Orders',
      sign_out: 'Sign Out',
    },
    'pt-BR': {
      home: 'Início',
      articles: 'Artigos',
      projects: 'Projetos',
      aepzera: 'Aepzera',
      about: 'Sobre',
      sign_in: 'Entrar',
      sign_up: 'Cadastrar',
      orders: 'Pedidos',
      sign_out: 'Sair',
    },
  };

  const content = contentNavbar[locale];

  const [openBurguer, setOpenBurguer] = useState<boolean>(false);
  const { user, signOut } = useAuth();
  const email = user?.email;

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpenBurguer(false));

  const close = () => setOpenBurguer(false);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <Container>
      <Logo />
      <nav>
        <ul className="navbar_desktop">
          <li>
            <Link href="/">
              <a>{content.home}</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>{content.articles}</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>{content.projects}</a>
            </Link>
          </li>
          <li>
            <Link href="/aepzera">
              <a>{content.aepzera}</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>{content.about}</a>
            </Link>
          </li>
          <div className="vertical_line" />
          {!user ? (
            <>
              <li>
                <Link href="/sign-in">
                  <a>{content.sign_in}</a>
                </Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <a>
                    <Button
                      primary
                      width="100%"
                      height="1rem"
                      padding="0.5rem 2rem"
                    >
                      {content.sign_up}
                    </Button>
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <SignedContainer>
              <li>
                <DropdownUserMenu {...{ content }} />
              </li>
            </SignedContainer>
          )}
        </ul>
      </nav>
      <BurguerContainer>
        <HamburgerButton {...{ openBurguer, setOpenBurguer }} />
        <HamburguerMenu {...{ content }} />
      </BurguerContainer>
    </Container>
  );
};

export default NavBar;
