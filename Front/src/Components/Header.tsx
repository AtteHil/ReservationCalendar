import { Box, Toolbar } from '@mui/material';
import  '../styles/header.css';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '../styles/customButton';
import { CustomNavBar } from '../styles/customNavBar';
import BasicMenu from './MenuButton';

export const Header = () => {
  const { t, i18n } = useTranslation()
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
  const fetchHello = async () => {
    const response = await fetch('http://localhost:3000');
    if(response.ok){
      const data = await response.json();
      console.log(data);
  }}

  return (
    
    <CustomNavBar position="static" className='header'>
        <Toolbar>
        <Box sx={{ display:'flex', flexGrow: 1 }}>
          <BasicMenu/> 
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 10, justifyContent: 'center' }}>
          {t('Cat Hotel reservation calendar')}
        </Box>
        <CustomButton onClick={() => { fetchHello() }}>Click Me</CustomButton>
        <CustomButton onClick={() => { changeLanguage('fi')}}>Fi</CustomButton>
        <CustomButton onClick={() => { changeLanguage('en') }}>EN</CustomButton>
      </Toolbar>
    </CustomNavBar>
    
  )
} 