import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {
	return (
		<Box as="footer" mt={6}>
			<Text backgroundColor={'var(--background)'} color={'var(--text-primary)'} p={0} fontSize={'sm'}>
				© 2022 - Made with ⌨️ by
				<Link href={'https://github.com/leo-num/skrivbok'}> leo-num</Link>
			</Text>
		</Box>
	)
}
