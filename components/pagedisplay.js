import { Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import React, { useRef, useState, useEffect } from 'react'

import Stats from './stats'
import Pagenumber from './pagenumber'
import Pagetitle from './pagetitle'

function Pagedisplay({ book, bookTitle, pageNumber, totalPageNumber }) {
	const router = useRouter()
	const text = book
	const [errorCount, setErrorCount] = useState(0)
	const [timeElapsed, setTimeElapsed] = useState(0)
	const [isRunning, setIsRunning] = useState(false)
	const [position, setPosition] = useState(0)
	const positionRef = useRef(0)

	const moveCursor = direction => {
		const updatePosition = direction === 'forward' ? 1 : -1
		setPosition(prevPos => prevPos + updatePosition)
	}

	// ⏱️ START STOP TIMER
	useEffect(() => {
		setIsRunning(
			position === 1 ? true : position === text.length ? false : isRunning
		)

		if (position === 0) {
			setTimeElapsed(0)
			setErrorCount(0)
		}
	}, [position, isRunning, text])

	// ⏱️ UPDATE TIMER
	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setTimeElapsed(prevTime => prevTime + 1)
			}, 1000) // 1000 milliseconds = 1 second

			return () => clearInterval(interval)
		}
	}, [isRunning, timeElapsed])

	const keypressRef = useRef(null)
	const handleKeypress = event => {
		if (event.key === text[positionRef.current]) {
			positionRef.current = positionRef.current + 1
			moveCursor('forward')

			// If the user has typed the last character in the page, stop the timer.
			if (positionRef.current === text.length) {
				setIsRunning(false)

				// Display the next page message.
				const nextParagraph = document.querySelector('.nextParagraph')
				nextParagraph.innerHTML = `Tryck [enter] för nästa sida.`

				const bookdata = JSON.parse(localStorage.getItem('bookdata'))
				bookdata.books.forEach(book => {
					if (book.name === bookTitle) {
						console.log(
							'book.name:',
							book.name,
							'completed pages',
							book.completedpages + 1
						)
						book.completedpages = parseInt(pageNumber) + 1
					}
				})

				localStorage.setItem('bookdata', JSON.stringify(bookdata))
			}
		} else if (event.key === 'Backspace') {
			// Adds the ability to use backspace. For now it serves no purpose.
			// moveCursor('backward')
			// positionRef.current = positionRef.current - 1
		} else if (event.key === 'Shift') {
			// Dont count shift as an error.
		} else if (event.key === 'Enter' && position === text.length) {
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
	useEffect(() => {
		keypressRef.current.focus()
	}, [])

	return (
		<>
			<Stats timeElapsed={timeElapsed} errorCount={errorCount} page={text} />
			<Pagetitle bookTitle={bookTitle} />
			<Pagenumber pageNumber={pageNumber} totalPageNumber={totalPageNumber} />

			<Text
				id="pageBooktext"
				fontSize="2xl"
				border={'0px solid'}
				ref={keypressRef}
				onKeyDown={handleKeypress}
				outline={'none'}
				tabIndex={0}
				autoFocus
			>
				<span className="textBehind">{text.substring(0, position)}</span>

				<span className="current">
					{text.substring(position, position + 1)}
				</span>

				{text.substring(position + 1)}
			</Text>
			<Text className="nextParagraph"></Text>
		</>
	)
}

export default Pagedisplay
