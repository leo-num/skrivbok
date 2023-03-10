import { extendTheme } from "@chakra-ui/react"

const colors = {
	light: {
		primary: "#81a1c1",
		secondary: "#88c0d0",
		tertiary: "#8fbcbb",
		warning: "#bf616a",
		highlight: "#d08770",
		success: "#a3be8c",
		textPrimary: "#2e3440",
		textSecondary: "#4c566a",
		textBehind: "#bf616a",
		background: "#fff",
		almostBackground: "#fff",
		// background: "#d8dee9",
		// almostBackground: "#eceff4",
	},
	dark: {
		primary: "#81a1c1",
		secondary: "#88c0d0",
		tertiary: "#8fbcbb",
		warning: "#bf616a",
		highlight: "#d08770",
		success: "#a3be8c",
		textPrimary: "#d8dee9",
		textSecondary: "#e5e9f0",
		textBehind: "#a3be8c",
		background: "#000",
		almostBackground: "#111",
		// background: "#2e3440",
		// almostBackground: "#61666f",
	},
}

const styles = {
	global: props => ({
		"*": {
			boxSizing: "border-box",
			// outline: "0px solid limegreen !important",
			// background: "rgb(0 100 0 / 0.1) !important"
		},
		body: {
			height: "100vh",
			background: `linear-gradient(to bottom, ${
				colors[props.colorMode].background
			} 60%, ${colors[props.colorMode].almostBackground})`,
			color: colors[props.colorMode].textPrimary,
		},

		".bookCover": {
			marginRight: "2",
			height: "160px",
			width: "100px",
			objectFit: "stretch",
			outline: "5px solid",
			outlineColor: colors[props.colorMode].textPrimary,
		},
		".externalLink": {
			color: colors[props.colorMode].textPrimary,
			borderBottom: "1px dotted",
		},
		".bookCard": {
			bg: colors[props.colorMode].background,
			display: "flex",
			alignItems: "center",
			border: "0px solid",
			width: "100%",
			height: "170px",
			marginBottom: "5",
			paddingLeft: "0",
			"&:hover": {
				// bg: colors[props.colorMode].almostBackground,
			},
		},
		".textBehind": {
			color: colors[props.colorMode].textBehind,
		},
		".current": {
			background: colors[props.colorMode].almostBackground,
			color: colors[props.colorMode].highlight,
			borderBottom: "3px solid",
		},
	}),
}

const components = {}

const fonts = {
	heading: "sans",
}

const config = {
	initialColorMode: "system",
	useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
