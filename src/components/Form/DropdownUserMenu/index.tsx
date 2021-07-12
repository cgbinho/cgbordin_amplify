import React from 'react';
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';
import { DropdownContainer } from './styles';
import Button from '../Button';
import { useRouter } from 'next/router';
import { useAuth } from '../../../contexts/auth';
import { HiChevronDown } from 'react-icons/hi';

export function DropdownUserMenu() {
  const router = useRouter();

  const { signOut } = useAuth();

  const handleOrderPage = () => {
    router.push('/orders');
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <DropdownContainer>
      <Menu
        menuButton={
          // <button className="btn-primary">Open menu</button>
          <a className="dropdown_button">
            <p>cgbinho@gmail.com</p>
            <HiChevronDown />
          </a>
        }
        theming="dark"
      >
        <MenuItem onClick={handleOrderPage} value="orders">
          Pedidos
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleSignOut} value="SignOut">
          Sair
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
