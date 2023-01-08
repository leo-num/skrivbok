import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const colors = {
	primary: '#81a1c1',
	secondary: '#88c0d0',
	tertiary: '#8fbcbb',
	warning: '#bf616a',
	highlight: '#d08770',
	success: '#a3be8c',
	textPrimary: mode('#2e3440', '#d8dee9'),
	textSecondary: mode('#4c566a', '#e5e9f0'),
	background: mode('#d8dee9', '#2e3440'),
	almostBackground: mode('#cdd1e3', '#3b4252')
}

const styles = {
	global: props => ({
		body: {
			bg: colors.background(props)
		}
	})
}

const components = {}

const fonts = {
	heading: 'sans'
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
