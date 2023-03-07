import { Box, Container, Text } from "@chakra-ui/react"
import Router from "next/router"
import React, { useEffect, useRef, useState } from "react"

import Pagenumber from "./pagenumber"
import Pagetitle from "./pagetitle"
import Timer from "./timer"

function Pagedisplay({ book, bookTitle, pageNumber, totalPageNumber }) {
	// define the router
	const router = Router

	const [isRunning, setIsRunning] = useState(false)
	const [startTime, setStartTime] = useState(null)
	const [hasStarted, setHasStarted] = useState(false)

	const text = book
	const [errorCount, setErrorCount] = useState(0)
	const [position, setPosition] = useState(0)
	const positionRef = useRef(0)

	// ⌨ KEYDOWN EVENT LISTENER
	useEffect(() => {
		const handleKeyDown = event => {
			// Mainly to prevent scrolling when pressing space.
			event.preventDefault()
			if (event.key === text[positionRef.current]) {
				positionRef.current = positionRef.current + 1
				moveCursor("forward")
				if (!hasStarted) {
					setHasStarted(true)
					setIsRunning(true)
					setStartTime(Date.now())
				}
			} else if (event.key === "Backspace") {
				// Adds the ability to use backspace. For now it serves no purpose.
				// moveCursor('backward')
				// positionRef.current = positionRef.current - 1
			} else if (event.key === "Shift") {
				// Dont count shift as an error.
			} else if (event.key === "Enter" && position === text.length) {
				// If the user presses enter at the end of the page, go to the next page.
				// Add 1 to the pageNumber, treat them as integers. JS tends to treat them as strings...
				// Set position to 0, so the user can start typing on the next page.
				positionRef.current = 0
				setPosition(0)
				const nextPage = parseInt(pageNumber) + 1
				// hide the next paragraph text.
				const nextParagraph = document.querySelector(".nextParagraph")
				nextParagraph.innerHTML = ``

				router.push(`/${bookTitle}/${nextPage}`)
			} else if (event.key === "ArrowRight") {
				// If the user presses the right arrow key, go to the next page.
				// Add 1 to the pageNumber, treat them as integers. JS tends to treat them as strings...
				// Set position to 0, so the user can start typing on the next page.
				positionRef.current = 0
				setPosition(0)
				setErrorCount(0)
				// setIsRunning(false)
				const nextPage = parseInt(pageNumber) + 1
				router.push(`/${bookTitle}/${nextPage}`)
			} else if (event.key === "ArrowLeft" && pageNumber > 0) {
				// If the user presses the left arrow key, go to the previous page.
				// Subtract 1 from the pageNumber, treat them as integers. JS tends to treat them as strings...
				// Set position to 0, so the user can start typing on the next page.
				positionRef.current = 0
				setPosition(0)
				setErrorCount(0)
				// setIsRunning(false)
				const nextPage = parseInt(pageNumber) - 1
				router.push(`/${bookTitle}/${nextPage}`)
			} else if (position === text.length) {
				// Stop the timer.
				setIsRunning(false)
			} else {
				// Assume that the user has made an error.
				setErrorCount(prevErrorCount => prevErrorCount + 1)
			}

			// Used to keep the current line centered in the viewport if scrolling is needed.
			const spanElement = document.querySelector(".current")
			spanElement.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest",
			})
		}

		// Adds the event listener to the document.
		document.addEventListener("keydown", handleKeyDown)

		// Removes the event listener when the component unmounts.
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [
		pageNumber,
		bookTitle,
		positionRef,
		errorCount,
		position,
		text,
		hasStarted,
		router,
	])

	// MOVE CURSOR
	const moveCursor = direction => {
		const updatePosition = direction === "forward" ? 1 : -1
		setPosition(prevPos => prevPos + updatePosition)
	}

	return (
		<>
			<Container maxW="container.lg" as="main" p="0">
				<Box width="100%" maxHeight="0" justifyContent="flex-end">
					<Text
						fontFamily="monospace"
						fontSize="xs"
						pb={3}
						textAlign="right">
						<span>Ord på sidan: {book.split(" ").length}</span>
						<br />
						<span> {errorCount} fel </span>
						<br />
						<span>
							<Timer isRunning={isRunning} startTime={startTime} />
						</span>
					</Text>
				</Box>
			</Container>
			<Pagetitle bookTitle={bookTitle} />
			<Pagenumber
				pageNumber={pageNumber}
				totalPageNumber={totalPageNumber}
			/>

			<Text id="pageBooktext" fontSize="2xl" outline={"none"}>
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
