// NextJS libraries:
import Head from 'next/head'

// Chakra UI libraries:
import { Box, Container } from '@chakra-ui/react'

// My components:
import SwitchFontFamily from './switchfontfamily'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Skrivbok</title>
			</Head>

			<Container maxW="container.md" as="main" pt="5" pt="20">
				<Box width="100%" maxHeight="0" background="white" justifyContent="flex-end" display="flex">
					<SwitchFontFamily />
				</Box>
				{children}
			</Container>
		</>
	)
}
