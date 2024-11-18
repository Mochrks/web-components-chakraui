import { useState } from 'react'

import './App.css'
import { HStack } from '@chakra-ui/react'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  )
}

export default App
