// Started to implement/learn themes and color mode based on Takuyas code: https://github.com/craftzdog/
// Thank you.

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { BsLightbulbFill, BsLightbulbOff } from "react-icons/bs"

const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				style={{ display: "inline-block" }}
				key={useColorModeValue("light", "dark")}
				initial={{ y: 0, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.2 }}
				exit={{ y: 0, opacity: 0 }}>
				<IconButton
					aria-label="Toggle theme"
					colorScheme={useColorModeValue("gray", "gray")}
					icon={useColorModeValue(
						<BsLightbulbOff />,
						<BsLightbulbFill />,
					)}
					onClick={toggleColorMode}
					isRound={true}
					background="transparent"
					border="none"
					ml={5}></IconButton>
			</motion.div>
		</AnimatePresence>
	)
}
export default ThemeToggleButton
