// NextJS libraries:
import Head from 'next/head'

// Chakra UI libraries:
import { Container } from '@chakra-ui/react'

// My components:
import Header from './header'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Skrivbok</title>
			</Head>
			<Header />
			<Container maxW="container.md" as="main" pt="20">
				{children}
			</Container>
		</>
	)
}
