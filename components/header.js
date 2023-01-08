import { Box, Container } from '@chakra-ui/react'

import SwitchFontFamily from './switchfontfamily'
import ThemeToggleButton from './themetogglebutton'

export default function Header() {
	return (
		<Container maxW="container.md" as="main" p="3">
			<Box width="100%" maxHeight="0" background="white" justifyContent="flex-end" display="flex">
				<SwitchFontFamily />
				<ThemeToggleButton />
			</Box>
		</Container>
	)
}
