
import { SimpleGrid } from '@chakra-ui/react';
import { Tabs } from '@chakra-ui/tabs';
import { LuUser, LuFolder, LuSquareCheck } from 'react-icons/lu';

const TabsComponent = () => {
  
  
    return (
      <SimpleGrid columns={3}>
        <Tabs>
          <LuUser />
          <LuFolder />
          <LuSquareCheck />
        </Tabs>
      </SimpleGrid>
    );
  }

export default TabsComponent;