import AppBar from '@mui/material/AppBar';
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";


export const Header = () => {
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
    </AppBar>
  )
} 