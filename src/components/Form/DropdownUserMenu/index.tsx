import React from 'react';
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';
import { DropdownContainer } from './styles';
import Button from '../Button';
import { useRouter } from 'next/router';
import { useAuth } from '../../../contexts/auth';
import { HiChevronDown } from 'react-icons/hi';

export function DropdownUserMenu({ content }) {
  const router = useRouter();

  const { user, signOut } = useAuth();

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
          <a className="dropdown_button">
            <p>{user.email}</p>
            <HiChevronDown />
          </a>
        }
        theming="dark"
      >
        <MenuItem onClick={handleOrderPage} value="orders">
          {content.orders}
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleSignOut} value="SignOut">
          {content.sign_out}
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
