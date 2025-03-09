import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaCat } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../api/AuthProvider';
import '../styles/menu.css';

export default function BasicMenu() {
  const {logOut} = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (location: string) => {

    setAnchorEl(null);
    navigate(location)
  };
  const handleMenuClose = () => { // closing if clicked outside of menu
    setAnchorEl(null);
  }
  const handleLogout = () => { // to be implemented
    logOut();
    setAnchorEl(null);
    navigate("/")
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FaCat />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose("/")}>{t('Front page')}</MenuItem>
        <MenuItem onClick={() => handleClose("/Reservations")}>{t('Reservations')}</MenuItem>
        <MenuItem onClick={() => handleClose("/Profile")}>{t('Profile')}</MenuItem>
        <MenuItem onClick={()=> handleLogout()}>{t('Log out')}</MenuItem> {/* to be implemented */}
      </Menu>
    </div>
  );
}