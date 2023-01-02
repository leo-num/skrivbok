// NextJS libraries:
import Head from 'next/head'

// Chakra UI libraries:
import { Container } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Skrivbok</title>
      </Head>

      <Container maxW="container.md" as="main" pt={5}>
        {children}
      </Container>
    </>
  )
}
