import { Text } from '@chakra-ui/react'

export default function Pagenumber({ pageNumber, totalPageNumber }) {
	return (
		<Text fontFamily="monospace" fontSize="xs" py={2}>
			Sida {parseInt(pageNumber) + 1} av {totalPageNumber}
		</Text>
	)
}
