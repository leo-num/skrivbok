import { Box, Switch } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function SwitchTheme() {
	return (
		<Box width="50" height="50" display="inline-block">
			<Text fontSize="xs" fontFamily="sans-serif" mb="2" align="center">
				Tema
			</Text>
			<FormControl display="flex" alignItems="center" mr="10" justifyContent="center">
				<Switch id="switch-theme" colorScheme="gray" />
			</FormControl>
		</Box>
	)
}
