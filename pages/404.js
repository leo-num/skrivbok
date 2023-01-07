// Next libraries:
import Head from 'next/head'

// Chakra UI libraries:
import { Box, Heading, Text } from '@chakra-ui/react'

// My components:
import Layout from '../components/layout'

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>404</title>
			</Head>
			<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
				<Heading>404</Heading>
				<Text>Ingen skrivbok här</Text>
			</Box>
		</Layout>
	)
}
