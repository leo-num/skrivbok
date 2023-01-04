import { useState, useEffect } from 'react'
import { Heading, Text } from '@chakra-ui/react'

const paragraph =
	'Den bok jag nu sätter mig ner att skriva måste verka meningslös på många - om jag alls vågar tänka mig, att "många" får läsa den - eftersom jag alldeles självmant, utan någons order, börjar ett sådant arbete och ändå inte själv är riktigt på det klara med vad avsikten är. Jag vill och måste, det är alltsammans. Allt mer och mer obönhörligt frågar man efter avsikten och planmässigheten i vad som göres och säges, så att helst inte ett ord ska falla på måfå - det är bara författaren till den här boken som har tvingats gå motsatta vägen, ut i det ändamålslösa. Ty fast mina år här som fånge och kemist - de måste vara över tjugu, tänker jag mig - har varit fulla nog ändå av arbete och brådska, måste det finnas något som inte tycker det är tillräckligt och som har lett och överblickat ett annat arbete inom mig, ett som jag själv inte hade någon möjlighet att överblicka och där jag ändå har varit djupt och nästan plågsamt medintresserad. Det arbetet kommer att vara slutfört, när jag väl har skrivit ner min bok. Jag inser alltså, hur förnuftsvidriga mina skriverier måste te sig inför allt rationellt och praktiskt tänkande, men jag skriver ändå.'

// const paragraph = 'Text som ska skrivas. Och lite till. Sen lite till. Och lite till igen. Och igen.'

export default function BookText() {
	const [position, setPosition] = useState(0)
	const [thumbsUpVisible, setThumbsUpVisible] = useState(false)
	const [timeElapsed, setTimeElapsed] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	const moveCursor = direction => {
		const updatePosition = direction === 'forward' ? 1 : -1
		setPosition(prevPos => prevPos + updatePosition)
	}

	useEffect(() => {
		const handleKeyDown = event => {
			event.preventDefault() // Mainly to prevent scrolling when pressing space.

			if (event.key === paragraph[position]) {
				position = position + 1
				moveCursor('forward')
			} else if (event.key === 'Backspace') {
				// moveCursor('backward')
				// position = position - 1
				// do nothing while this is commented out
			} else {
				// The wrong key is pressed, ignore it. Prevent document from scrolling.
				event.preventDefault()
			}

			if (position === paragraph.length) {
				// make the thumbs up image visible
				setThumbsUpVisible(true)
			}

			const spanElement = document.querySelector('.highlighted-char')
			spanElement.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			})
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	useEffect(() => {
		setIsRunning(position === 1 ? true : position === paragraph.length ? false : isRunning)
	}, [position])

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setTimeElapsed(prevTime => prevTime + 1)
			}, 1000) // 1000 milliseconds = 1 second

			return () => clearInterval(interval)
		}
	}, [isRunning])

	return (
		<>
			<Text>Tid: {timeElapsed} sekunder</Text>
			<Heading fontSize="1.8rem">Kallocain av Karin Boye</Heading>
			<Heading mb={3} fontSize="1.5rem">
				Första kapitlet
			</Heading>
			<Text fontSize="1.5rem" lineHeight="2.3rem" id="pageBooktext">
				<span className="highlighted">{paragraph.substring(0, position)}</span>
				<span className="highlighted-char">{paragraph.substring(position, position + 1)}</span>
				{paragraph.substring(position + 1)}
			</Text>
			{thumbsUpVisible && <img className="image-thumbs-up" src="/images/thumbs-up.png" />}
		</>
	)
}
