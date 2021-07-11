import React from 'react';
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';
import { DropdownContainer } from './styles';
import Button from '../Button';

export function Dropdown() {
  return (
    <DropdownContainer>
      <Menu
        menuButton={<MenuButton>cgbinho@gmail.com</MenuButton>}
        theming="dark"
      >
        <MenuItem>Pedidos</MenuItem>
        <MenuDivider />
        <MenuItem>Sair</MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
