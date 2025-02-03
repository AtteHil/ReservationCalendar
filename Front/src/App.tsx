
import CalendarModule from './Components/Calendar'
import './App.css'
import './i18n';
import { Header } from './Components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react"
function App() {
  

  return (
    <ChakraProvider value={defaultSystem}>
      <Header/>
      <CalendarModule/>
    </ChakraProvider>
  )
}

export default App
