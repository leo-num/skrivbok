import { useEffect, useState } from "react"

function Timer({ isRunning, startTime }) {
	const [timeElapsed, setTimeElapsed] = useState(0)

	useEffect(() => {
		let animationFrameId

		// if (!isRunning) {
		// 	setTimeElapsed(0)
		// }

		const tick = () => {
			const timeElapsed = Date.now() - startTime
			setTimeElapsed(timeElapsed)

			animationFrameId = requestAnimationFrame(tick)
		}

		if (isRunning) {
			animationFrameId = requestAnimationFrame(tick)
		}

		return () => cancelAnimationFrame(animationFrameId)
	}, [isRunning, startTime])

	const formatTime = elapsed => {
		const minutes = Math.floor(elapsed / 60000)
		const seconds = Math.floor((elapsed % 60000) / 1000)
		const hundredths = Math.floor((elapsed % 1000) / 10)
		return `${minutes}:${seconds.toString().padStart(2, "0")}:${hundredths
			.toString()
			.padStart(2, "0")}`
	}

	return <span>Tid: {formatTime(timeElapsed)}</span>
}

export default Timer
