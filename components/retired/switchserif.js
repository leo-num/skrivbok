// React libraries:
import { useState, useEffect } from 'react'

// Chakra UI libraries:
import { Box, FormControl, Switch, Text } from '@chakra-ui/react'

// Not using this since implementing the 3-way switch.
// Did work though.
export default function SwitchSerif() {
	const [serif, setSerif] = useState(null)

	useEffect(() => {
		const textElement = document.getElementById('pageBooktext')
		textElement.style.fontFamily = serif ? 'serif' : 'inherit'
	}, [serif])

	const toggleSerif = () => {
		setSerif(!serif)
	}

	return (
		<Box width="50" height="50" display="inline-block">
			<Text fontSize="xs" fontFamily="serif" mb="2" align="center">
				Serif
			</Text>
			<FormControl
				display="flex"
				alignItems="center"
				mr="10"
				justifyContent="center">
				<Switch
					id="switch-serif"
					onChange={toggleSerif}
					colorScheme="gray"
				/>
			</FormControl>
		</Box>
	)
}
