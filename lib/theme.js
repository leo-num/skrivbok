import { extendTheme } from '@chakra-ui/react'

const colors = {
	light: {
		primary: '#81a1c1',
		secondary: '#88c0d0',
		tertiary: '#8fbcbb',
		warning: '#bf616a',
		highlight: '#d08770',
		success: '#a3be8c',
		textPrimary: '#2e3440',
		textSecondary: '#4c566a',
		textBehind: '#bf616a',
		background: '#d8dee9',
		almostBackground: '#cdd1e3'
	},
	dark: {
		primary: '#81a1c1',
		secondary: '#88c0d0',
		tertiary: '#8fbcbb',
		warning: '#bf616a',
		highlight: '#d08770',
		success: '#a3be8c',
		textPrimary: '#d8dee9',
		textSecondary: '#e5e9f0',
		textBehind: '#a3be8c',
		background: '#2e3440',
		almostBackground: '#3b4252'
	}
}

const styles = {
	global: props => ({
		html: {
			lang: 'sv'
		},
		body: {
			bg: colors[props.colorMode].background
		},

		'.bookCover': {
			aspectRatio: '5 / 4',
			height: '100%',
			objectFit: 'contain',
			border: '0px solid',
			borderColor: colors[props.colorMode].textPrimary
		},
		'.externalLink': {
			color: colors[props.colorMode].warning
		},
		'.bookCard': {
			bg: colors[props.colorMode].background,
			'&:hover': {
				bg: colors[props.colorMode].almostBackground
			}
		},
		// Create a specific style for a div with the class "custom-class"
		'.textBehind': {
			color: colors[props.colorMode].textBehind
		},
		'.current': {
			background: colors[props.colorMode].almostBackground,
			color: colors[props.colorMode].highlight,
			borderBottom: '3px solid'
		}
	})
}

const components = {}

const fonts = {
	heading: 'sans'
}

const config = {
	initialColorMode: 'system',
	useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
