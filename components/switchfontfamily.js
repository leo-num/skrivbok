// React libraries:

// Chakra UI libraries:
import { Box, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function SwitchFontFamily() {
	const [tabIndex, setTabIndex] = useState(0)

	const handleSliderChange = event => {
		setTabIndex(parseInt(event.target.value, 10))
	}

	const handleTabsChange = index => {
		setTabIndex(index)
	}

	useEffect(() => {
		const textElement = document.getElementById("pageBooktext")

		if (tabIndex === 0) {
			textElement.style.fontFamily = "Roboto, sans-serif"
		} else if (tabIndex === 1) {
			textElement.style.fontFamily = "Merriweather ,serif"
		} else if (tabIndex === 2) {
			textElement.style.fontFamily = "Roboto Mono, monospace"
		}
	}, [tabIndex])

	return (
		<Box>
			<input
				type="range"
				min="0"
				max="2"
				value={tabIndex}
				onChange={handleSliderChange}
				hidden={true}
			/>
			<Tabs index={tabIndex} onChange={handleTabsChange}>
				<TabList>
					<Tab>
						<Text fontSize={"xs"} fontFamily="sans-serif">
							Sans
						</Text>
					</Tab>
					<Tab>
						<Text fontSize={"xs"} fontFamily="serif">
							Serif
						</Text>
					</Tab>
					<Tab>
						<Text fontSize={"xs"} fontFamily="monospace">
							Monospace
						</Text>
					</Tab>
				</TabList>
			</Tabs>
		</Box>
	)
}
