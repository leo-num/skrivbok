import { Box, Switch } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function SwitchMonospace() {
	const [monospace, setMonospace] = useState(null)

	useEffect(() => {
		const textElement = document.getElementById('pageBooktext')
		textElement.style.fontFamily = monospace ? 'monospace' : 'inherit'
	}, [monospace])

	const toggleMonospace = () => {
		setMonospace(!monospace)
	}

	return (
		<Box width="50" height="50" display="inline-block">
			<Text fontSize="xs" fontFamily="monospace" mb="2" align="center">
				Monospace
			</Text>
			<FormControl display="flex" alignItems="center" mr="10" justifyContent="center">
				<Switch id="switch-monospace" onChange={toggleMonospace} colorScheme="gray" />
			</FormControl>
		</Box>
	)
}
