// Next libraries:

// Chakra UI libraries:
import { Box, Heading, Text } from "@chakra-ui/react"
import Head from "next/head"

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				height="100vh">
				<Heading>404</Heading>
				<Text>Ingen skrivbok här</Text>
			</Box>
		</>
	)
}
