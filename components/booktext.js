// React libraries:
import { useState, useEffect } from 'react'
import { useRef } from 'react'

// Chakra UI libraries:
import { Heading, Text } from '@chakra-ui/react'

// Sample text. The first paragraph of Kallocain By Karin Boye, as found on Project Runeberg.
const paragraph =
	'Den bok jag nu sätter mig ner att skriva måste verka meningslös på många - om jag alls vågar tänka mig, att "många" får läsa den - eftersom jag alldeles självmant, utan någons order, börjar ett sådant arbete och ändå inte själv är riktigt på det klara med vad avsikten är. Jag vill och måste, det är alltsammans. Allt mer och mer obönhörligt frågar man efter avsikten och planmässigheten i vad som göres och säges, så att helst inte ett ord ska falla på måfå - det är bara författaren till den här boken som har tvingats gå motsatta vägen, ut i det ändamålslösa. Ty fast mina år här som fånge och kemist - de måste vara över tjugu, tänker jag mig - har varit fulla nog ändå av arbete och brådska, måste det finnas något som inte tycker det är tillräckligt och som har lett och överblickat ett annat arbete inom mig, ett som jag själv inte hade någon möjlighet att överblicka och där jag ändå har varit djupt och nästan plågsamt medintresserad. Det arbetet kommer att vara slutfört, när jag väl har skrivit ner min bok. Jag inser alltså, hur förnuftsvidriga mina skriverier måste te sig inför allt rationellt och praktiskt tänkande, men jag skriver ändå.'

export default function BookText() {
	// Position keeps track of how many characters have been typed.
	const [position, setPosition] = useState(0)

	// Time elapsed is a simple timer that starts when the user starts typing.
	// And stops when the user has typed the last character in the paragraph.
	const [timeElapsed, setTimeElapsed] = useState(0)

	// isRunning is used to start and stop the timer.
	const [isRunning, setIsRunning] = useState(false)

	// This function is used to move the cursor forward or backward.
	// Backwards is not used for now.
	const moveCursor = direction => {
		const updatePosition = direction === 'forward' ? 1 : -1
		setPosition(prevPos => prevPos + updatePosition)
	}

	// useRef Hook - ESLint warned me about the way I handled my variable earlier.
	// So I implemented this Hook to apease it. I hope too understand the concept soon.
	const positionRef = useRef(0)

	useEffect(() => {
		const handleKeyDown = event => {
			// Mainly to prevent scrolling when pressing space.
			event.preventDefault()

			if (event.key === paragraph[positionRef.current]) {
				positionRef.current = positionRef.current + 1
				moveCursor('forward')
			} else if (event.key === 'Backspace') {
				// Adds the ability to use backspace. For now it serves no purpose.
				// moveCursor('backward')
				// positionRef.current = positionRef.current - 1
			} else {
				// Wrong key pressed. Do nothing.
				// Eventually implement a visual cue suggesting typing error, counting errors etc.
			}

			// Used to keep the current line centered in the viewport if scrolling is needed.
			const spanElement = document.querySelector('.highlighted-char')
			spanElement.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			})
		}

		// Adds the event listener to the document.
		document.addEventListener('keydown', handleKeyDown)

		// Removes the event listener when the component unmounts.
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	// This useEffect is used to start and stop the timer.
	// When the first character is typed, position is 1 and the timer starts.
	// When the last character is typed, position is equal to the length of the paragraph and the timer stops.
	useEffect(() => {
		setIsRunning(position === 1 ? true : position === paragraph.length ? false : isRunning)
	}, [position, isRunning])

	// This useEffect is used to update the timer.
	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setTimeElapsed(prevTime => prevTime + 1)
			}, 1000) // 1000 milliseconds = 1 second

			return () => clearInterval(interval)
		}
	}, [isRunning])

	useEffect(() => {
		// If the user has typed the last character and the timer has stopped, color the whole paragraph green.
		if (position === paragraph.length) {
			// Make the whole paragraph green, all the characters in #pageBooktext.
			const spanElements = document.querySelectorAll('#pageBooktext span')
			spanElements.forEach(span => {
				span.classList.add('paragraphFinished')
			})
		}
	}, [position])

	return (
		<>
			<Text>
				[ {Math.floor(timeElapsed / 60)}m : {timeElapsed % 60}s ]
			</Text>
			<Heading fontSize="1.8rem">Kallocain av Karin Boye</Heading>
			<Heading mb="3" fontSize="1.5rem">
				Första kapitlet
			</Heading>
			<Text id="pageBooktext">
				<span className="highlighted">{paragraph.substring(0, position)}</span>
				<span className="highlighted-char">{paragraph.substring(position, position + 1)}</span>
				{paragraph.substring(position + 1)}
			</Text>
		</>
	)
}
