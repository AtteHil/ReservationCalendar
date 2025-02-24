import { Box, Toolbar } from '@mui/material';
import '../styles/header.css';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '../styles/customButton';
import { CustomNavBar } from '../styles/customNavBar';
import BasicMenu from './MenuButton';

export const Header = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (

    <CustomNavBar position="static" className='header' sx={{ left: 0, right: 0, width: "100%" }}>
      <Toolbar >
        <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexGrow: 1 }}>
          <BasicMenu />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 10, justifyContent: 'center' }}>
          {t('Cat Hotel reservation calendar')}
        </Box>
  
        <CustomButton onClick={() => { changeLanguage('fi') }}>Fi</CustomButton>
        <CustomButton onClick={() => { changeLanguage('en') }}>EN</CustomButton>
      </Toolbar>
    </CustomNavBar>

  )
} 