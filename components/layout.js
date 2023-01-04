// NextJS libraries:
import Head from 'next/head'

// Chakra UI libraries:
import { Box, Container } from '@chakra-ui/react'

import SwitchMonospace from '../components/SwitchMonospace'
import SwitchTheme from '../components/SwitchTheme'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Skrivbok</title>
			</Head>

			<Container maxW="container.md" as="main" pt="5">
				<Box width="100%" maxHeight="0" background="white" justifyContent="flex-end" display="flex">
					<SwitchMonospace />
					{/* <SwitchTheme /> */}
				</Box>
				{children}
			</Container>
		</>
	)
}
