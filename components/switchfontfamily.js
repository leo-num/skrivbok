// React libraries:
import { useState, useEffect } from 'react'

// Chakra UI libraries:
import { Box, Text } from '@chakra-ui/react'
import { Tabs, TabList, Tab } from '@chakra-ui/react'

export default function SwitchFontFamily() {
	const [tabIndex, setTabIndex] = useState(0)

	const handleSliderChange = event => {
		setTabIndex(parseInt(event.target.value, 10))
	}

	const handleTabsChange = index => {
		setTabIndex(index)
	}

	useEffect(() => {
		const textElement = document.getElementById('pageBooktext')

		if (tabIndex === 0) {
			textElement.style.fontFamily = 'sans-serif'
		} else if (tabIndex === 1) {
			textElement.style.fontFamily = 'serif'
		} else if (tabIndex === 2) {
			textElement.style.fontFamily = 'monospace'
		}
	}, [tabIndex])

	return (
		<Box>
			<input type="range" min="0" max="2" value={tabIndex} onChange={handleSliderChange} hidden={true} />
			<Tabs index={tabIndex} onChange={handleTabsChange}>
				<TabList>
					<Tab>
						<Text fontFamily="sans-serif">Sans</Text>
					</Tab>
					<Tab>
						<Text fontFamily="serif">Serif</Text>
					</Tab>
					<Tab>
						<Text fontFamily="monospace">Monospace</Text>
					</Tab>
				</TabList>
			</Tabs>
		</Box>
	)
}
