import '@styles/globals.css'
import { ChakraProvider, Container } from '@chakra-ui/react'
function Website({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Website
