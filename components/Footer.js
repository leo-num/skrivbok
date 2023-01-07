// Next libraries:
import Link from 'next/link'

// Chakra UI libraries:
import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
	return (
		<Box as="footer" mt={6}>
			<Text backgroundColor={'var(--background)'} color={'var(--text-primary)'} p={0} fontSize={'sm'}>
				© 2023 - Made with ⌨️ by
				<Link href={'https://github.com/leo-num/skrivbok'}> leo-num</Link>
			</Text>
		</Box>
	)
}
