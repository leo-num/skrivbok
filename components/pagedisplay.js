import { Box, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import React, { useRef, useState, useEffect } from 'react'

function Pagedisplay({ book, bookTitle, pageNumber, totalPageNumber }) {
	// Get the router object.
	const router = useRouter()

	// Convert the page into a valid string, and strip the first and last character.
	const page = book
	const [errorCount, setErrorCount] = useState(0)

	// Position keeps track of how many characters have been typed.
	const [position, setPosition] = useState(0)
	// useRef Hook - ESLint warned me about the way I handled my variable earlier.
	// So I implemented this Hook to apease it. I hope too understand the concept soon.
	// It works but I dont know why.
	const positionRef = useRef(0)

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

	// ⌨ KEYDOWN EVENT LISTENER
	useEffect(() => {
		const handleKeyDown = event => {
			// Mainly to prevent scrolling when pressing space.
			event.preventDefault()

			if (event.key === page[positionRef.current]) {
				positionRef.current = positionRef.current + 1
				moveCursor('forward')
			} else if (event.key === 'Backspace') {
				// Adds the ability to use backspace. For now it serves no purpose.
				// moveCursor('backward')
				// positionRef.current = positionRef.current - 1
			} else if (event.key === 'Shift') {
				// Dont count shift as an error.
			} else if (event.key === 'Enter' && position === page.length) {
				// If the user presses enter at the end of the page, go to the next page.
				// Add 1 to the pageNumber, treat them as integers. JS tends to treat them as strings...
				// Set position to 0, so the user can start typing on the next page.
				positionRef.current = 0
				setPosition(0)
				const nextPage = parseInt(pageNumber) + 1
				// hide the next paragraph text.
				const nextParagraph = document.querySelector('.nextParagraph')
				nextParagraph.innerHTML = ``

				router.push(`/${bookTitle}/${nextPage}`)
			} else if (event.key === 'ArrowRight') {
				// If the user presses the right arrow key, go to the next page.
				// Add 1 to the pageNumber, treat them as integers. JS tends to treat them as strings...
				// Set position to 0, so the user can start typing on the next page.
				positionRef.current = 0
				setPosition(0)
				setErrorCount(0)
				setTimeElapsed(0)
				setIsRunning(false)
				const nextPage = parseInt(pageNumber) + 1
				router.push(`/${bookTitle}/${nextPage}`)
			} else if (event.key === 'ArrowLeft' && pageNumber > 0) {
				// If the user presses the left arrow key, go to the previous page.
				// Subtract 1 from the pageNumber, treat them as integers. JS tends to treat them as strings...
				// Set position to 0, so the user can start typing on the next page.
				positionRef.current = 0
				setPosition(0)
				setErrorCount(0)
				setTimeElapsed(0)
				setIsRunning(false)
				const nextPage = parseInt(pageNumber) - 1
				router.push(`/${bookTitle}/${nextPage}`)
			} else {
				// Assume that the user has made an error.
				setErrorCount(prevErrorCount => prevErrorCount + 1)
			}

			// Used to keep the current line centered in the viewport if scrolling is needed.
			const spanElement = document.querySelector('.current')
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
	}, [page, position, pageNumber, bookTitle, router, positionRef, errorCount])

	// ⏱️ START STOP TIMER
	useEffect(() => {
		setIsRunning(
			position === 1 ? true : position === page.length ? false : isRunning
		)
	}, [position, isRunning, page])

	// ⏱️ UPDATE TIMER
	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setTimeElapsed(prevTime => prevTime + 1)
			}, 1000) // 1000 milliseconds = 1 second

			return () => clearInterval(interval)
		}
	}, [isRunning, timeElapsed])

	// ------ HANDLE END OF PARAGRAPH
	useEffect(() => {
		if (position === page.length) {
			const nextParagraph = document.querySelector('.nextParagraph')
			nextParagraph.innerHTML = `Tryck [enter] för nästa sida.`

			// 2. Write the number of the paragraph to the local storage, as a string.
			// TODO
		}
	}, [position, timeElapsed, page])

	return (
		<>
			<Box id="indexHeader" borderBottom={'solid'}>
				<Text fontSize={'md'}>
					<Link href="/">[Tillbaka]</Link>
				</Text>
				<Heading
					as="h1"
					fontFamily={'Merriweather'}
					size="2xl"
					pb={'2'}
					textAlign="left">
					Skrivbok
				</Heading>
			</Box>
			<Text fontFamily="monospace" fontSize="xs" pt={2}>
				Sida {parseInt(pageNumber) + 1} av {totalPageNumber}
			</Text>
			<Text fontFamily="monospace" fontSize="xs" pb={3}>
				<span>
					[{Math.floor(timeElapsed / 60)}m : {timeElapsed % 60}s]
				</span>
				<span> | </span>
				<span> {errorCount} fel </span>
				<span> | </span>
				<span>Ord på sidan: {page.split(' ').length}</span>
				<span> | </span>
				<span className="wpm"></span>
			</Text>

			<Heading fontSize="1.8rem" pb={2}>
				{bookTitle && bookTitle.replace(/([A-Z])/g, ' $1')}
			</Heading>
			<Text id="pageBooktext" fontSize="2xl">
				<span className="textBehind">
					{page.substring(0, position)}
				</span>

				<span className="current">
					{page.substring(position, position + 1)}
				</span>

				{page.substring(position + 1)}
			</Text>
			<Text className="nextParagraph"></Text>
		</>
	)
}

export default Pagedisplay
