import Link from 'next/link'
import { Box, Heading, Text } from '@chakra-ui/react'
export default function Pageheader() {
	return (
		<Box id="indexHeader" borderBottom={'solid'}>
			<Text fontSize={'md'}>
				<Link href="/">[Tillbaka]</Link>
			</Text>
			<Heading
				as="h1"
				fontFamily={'Merriweather'}
				size="2xl"
				pb={'2'}
				textAlign="left"
			>
				Skrivbok
			</Heading>
		</Box>
	)
}
