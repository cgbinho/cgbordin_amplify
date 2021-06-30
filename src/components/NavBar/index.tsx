import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/auth';
import { Container, BurguerContainer, SignedContainer } from './styles';
import Logo from '../Logo';
import Button from '../Form/Button';

const NavBar = () => {
  const { user } = useAuth();
  const email = user?.email;
  console.log(user);

  return (
    <Container>
      <Logo />
      <nav>
        <ul className="navbar_desktop">
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>Trabalhos</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          {!user ? (
            <>
              <div className="vertical_line" />
              <li>
                <Link href="/sign-in">
                  <a>Entrar</a>
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
                      Cadastrar
                    </Button>
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <SignedContainer>
              <li>{email}</li>
              <li>
                <Button
                  primary
                  width="100%"
                  height="1rem"
                  padding="0.5rem 2rem"
                  onClick={() => console.log('click!')}
                >
                  Sair
                </Button>
              </li>
            </SignedContainer>
          )}
        </ul>
      </nav>
      <BurguerContainer>
        <button>Burguer Menu</button>
      </BurguerContainer>
    </Container>
  );
};

export default NavBar;
