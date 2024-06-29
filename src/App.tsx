
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import WorkFlow from './Workflow/WorkFlow'

function App() {
  

  return (
    <ChakraProvider>

      <WorkFlow />
    </ChakraProvider>
  )
}

export default App
