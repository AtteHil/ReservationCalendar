import AppBar from '@mui/material/AppBar';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";


export const Header = () => {
  const fetchHello = async () => {
    const response = await fetch('https://reservationcalendar.onrender.com/');
    if(response.ok){
      const data = await response.json();
      console.log(data);
  }}

  return (
    <AppBar position="static">
        <Tabs variant="enclosed" maxW="md"  defaultValue={"tab-1"}>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>Content for Tab 1</TabPanel>
                <TabPanel>Content for Tab 2</TabPanel>
                <TabPanel>Content for Tab 3</TabPanel>
            </TabPanels>
        </Tabs>
        <button onClick={()=>{fetchHello()}}></button>
    </AppBar>
  )
} 