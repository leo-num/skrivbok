import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Footer() {
	return (
		<Box
			as="footer"
			maxW="container.lg"
			mt={6}
			mb={6}
			px={0}
			border="0px solid">
			<Text fontSize={"sm"}>
				© {new Date().getFullYear()} - Gjord med 🤷‍♂️ av&nbsp;
				<Link href="https://github.com/leo-num/skrivbok">
					<a
						className="externalLink"
						href="https://github.com/leo-num/skrivbok"
						rel="noreferrer"
						target="_blank">
						leo-num.
					</a>
				</Link>
				Inspirerad av{" "}
				<Link href="https://typelit.io/">
					<a
						href="https://typelit.io/"
						className="externalLink"
						rel="noreferrer"
						target="_blank">
						typelit.io
					</a>
				</Link>
				. Texter är hämtade från{" "}
				<Link href="http://runeberg.org/">
					<a
						href="http://runeberg.org/"
						className="externalLink"
						rel="noreferrer"
						target="_blank">
						Project Runeberg
					</a>
				</Link>
				.
			</Text>
		</Box>
	)
}
