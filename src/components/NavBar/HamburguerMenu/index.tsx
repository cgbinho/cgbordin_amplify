import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/auth';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import HamburgerButton from '../HamburguerButton';
import { StyledButton, StyledLink, StyledMenu } from './styles';
import { useRouter } from 'next/router';

export function HamburguerMenu() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const [openBurguer, setOpenBurguer] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpenBurguer(false));

  const close = () => setOpenBurguer(false);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const MenuItem = ({ label, path }) => {
    return (
      <Link href={path} passHref>
        <StyledLink onClick={close}>{label}</StyledLink>
      </Link>
    );
  };

  const GuestMenu = () => {
    return (
      <>
        <MenuItem {...{ label: 'Entrar', path: '/sign-in' }} />
        <Link href="/sign-up" passHref>
          <StyledLink onClick={close}>
            <StyledButton primary width="100%">
              Cadastrar
            </StyledButton>
          </StyledLink>
        </Link>
      </>
    );
  };

  const LoggedMenu = () => {
    return (
      <>
        <MenuItem {...{ label: 'Pedidos', path: '/orders' }} />
        <StyledLink onClick={handleSignOut}>Sair</StyledLink>
      </>
    );
  };

  return (
    <div ref={node}>
      <StyledMenu open={openBurguer}>
        <MenuItem {...{ label: 'Início', path: '/' }} />
        {!user && <GuestMenu />}
        <MenuItem {...{ label: 'Sobre', path: '/about' }} />
        <MenuItem {...{ label: 'Artigos', path: '/articles' }} />
        <MenuItem {...{ label: 'Projetos', path: '/projects' }} />
        <MenuItem {...{ label: 'Aepzera', path: '/aepzera' }} />
        {user && <LoggedMenu />}
      </StyledMenu>
      <HamburgerButton {...{ openBurguer, setOpenBurguer }} />
    </div>
  );
}
