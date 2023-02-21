import { AnimatePresence } from "framer-motion"

import Chakra from "../components/chakra"
import Fonts from "../components/fonts"

if (typeof window !== "undefined") {
	window.history.scrollRestoration = "manual"
}

function Website({ Component, pageProps, router }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Fonts />
			<AnimatePresence
				mode="wait"
				initial={true}
				onExitComplete={() => {
					if (typeof window !== "undefined") {
						window.scrollTo({ top: 0 })
					}
				}}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</Chakra>
	)
}

export default Website
