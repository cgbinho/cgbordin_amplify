import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/auth';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import HamburgerButton from '../HamburguerButton';
import { StyledButton, StyledLink, StyledMenu } from './styles';
import { useRouter } from 'next/router';

export function HamburguerMenu({ content }) {
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
        <MenuItem {...{ label: `${content.sign_in}`, path: '/sign-in' }} />
        <Link href="/sign-up" passHref>
          <StyledLink onClick={close}>
            <StyledButton primary width="100%">
              {content.sign_up}
            </StyledButton>
          </StyledLink>
        </Link>
      </>
    );
  };

  const LoggedMenu = () => {
    return (
      <>
        <MenuItem {...{ label: `${content.orders}`, path: '/orders' }} />
        <StyledLink onClick={handleSignOut}>{content.sign_out}</StyledLink>
      </>
    );
  };

  return (
    <div ref={node}>
      <StyledMenu open={openBurguer}>
        <MenuItem {...{ label: `${content.home}`, path: '/' }} />
        {!user && <GuestMenu />}
        <MenuItem {...{ label: `${content.about}`, path: '/about' }} />
        <MenuItem {...{ label: `${content.articles}`, path: '/articles' }} />
        <MenuItem {...{ label: `${content.projects}`, path: '/projects' }} />
        <MenuItem {...{ label: `${content.aepzera}`, path: '/aepzera' }} />
        {user && <LoggedMenu />}
      </StyledMenu>
      <HamburgerButton {...{ openBurguer, setOpenBurguer }} />
    </div>
  );
}
