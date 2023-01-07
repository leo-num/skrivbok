// Basic Nord theme colors, css-resets, and my classes.
import '@styles/globals.css'

// Wrap the app in the ChakraProvider
import { ChakraProvider } from '@chakra-ui/react'

function Website({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
export default Website
