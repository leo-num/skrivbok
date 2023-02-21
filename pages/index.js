import {
	Box,
	Container,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"

import Footer from "../components/footer"
import ThemeToggleButton from "../components/themetogglebutton"

export default function Home({ books }) {
	return (
		<>
			<Head>
				<title>Skrivbok</title>
			</Head>

			<Container maxW="container.lg" as="main" height="100vh" pt="20">
				<Box p="4">
					<Box
						width="100%"
						maxHeight="0"
						background="white"
						justifyContent="flex-end"
						display="flex">
						<ThemeToggleButton />
					</Box>

					<Box id="indexHeader" pb={"4"} borderBottom={"solid 1px"}>
						<Heading
							as="h1"
							fontFamily={"Merriweather"}
							size="2xl"
							pb={"2"}>
							Skrivbok
						</Heading>
						<Text fontFamily={"Merriweather"} as="p" textAlign="left">
							Skriv. Läs. Snabbt. Långsamt. Helt som du vill.
						</Text>
					</Box>
				</Box>

				<Box id="indexContent" p={4}>
					<Box className="bookCard">
						<Link href="/Kallocain/0" className="booklink">
							<Image
								className="bookCover"
								src="images/Kallocain.jpg"
								alt="Kallocain"
								p={0}
								sx={{
									":hover": {
										cursor: "pointer",
									},
								}}
							/>
						</Link>
						<VStack p={2} display={"inline-block"}>
							<Heading
								as="h2"
								fontFamily={"Merriweather"}
								size={"lg"}
								textAlign="left">
								<Link href="/Kallocain/0" className="booklink">
									Kallocain
								</Link>
							</Heading>

							<Text as="p" fontFamily={"Merrriweather"} textAlign="left">
								Karin Boye
							</Text>
							<Text
								as="p"
								fontFamily={"Merrriweather"}
								fontSize={"xs"}
								textAlign="left"
								display={"inline-flex"}>
								{books[0].totalpages} sidor
							</Text>
						</VStack>
					</Box>

					<Box className="bookCard">
						<Link href="/DoktorGlas/0" className="booklink">
							<Image
								className="bookCover"
								src="images/DoktorGlas.jpg"
								alt="Doktor Glas"
								sx={{
									":hover": {
										cursor: "pointer",
									},
								}}
							/>
						</Link>
						<VStack p={2} display={"inline-block"}>
							<Heading
								as="h2"
								fontFamily={"Merriweather"}
								size={"lg"}
								textAlign="left">
								<Link href="/DoktorGlas/0" className="booklink">
									Doktor Glas
								</Link>
							</Heading>
							<Text as="p" fontFamily={"Merrriweather"} textAlign="left">
								Hjalmar Söderberg
							</Text>
							<Text
								as="p"
								fontFamily={"Merrriweather"}
								fontSize={"xs"}
								textAlign="left"
								display={"inline-flex"}>
								{books[1].totalpages} sidor
							</Text>
						</VStack>
					</Box>

					<Box className="bookCard">
						<Link href="/KejsarnAvPortugallien/0" className="booklink">
							<Image
								className="bookCover"
								src="images/KejsarnAvPortugallien.jpg"
								alt="Kejsarn Av Portugallien"
								p={0}
								sx={{
									":hover": {
										cursor: "pointer",
									},
								}}
							/>
						</Link>
						<VStack p={2} display={"inline-block"}>
							<Heading
								as="h2"
								fontFamily={"Merriweather"}
								size={"lg"}
								textAlign="left">
								<Link href="/KejsarnAvPortugallien/0" className="booklink">
									Kejsarn av Portugallien
								</Link>
							</Heading>
							<Text
								as="p"
								fontFamily={"Merrriweather"}
								size={""}
								textAlign="left">
								Selma Lagerlöf
							</Text>
							<Text
								as="p"
								fontFamily={"Merrriweather"}
								fontSize={"xs"}
								textAlign="left"
								display={"inline-flex"}>
								{books[2].totalpages} sidor
							</Text>
						</VStack>
					</Box>
				</Box>
				<Footer />
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const fs = require("fs")
	const path = require("path")

	const bookFiles = fs.readdirSync(
		path.join(process.cwd(), "public", "books"),
	)

	// Map the book files to an array of objects containing the book name and total pages.
	// Only .txt files.
	const books = bookFiles
		.filter(file => file.endsWith(".txt"))
		.map(file => {
			const bookname = file.slice(0, -4) // strip '.txt' from the file name
			const totalpages = fs
				.readFileSync(
					path.join(process.cwd(), "public", "books", file),
					"utf8",
				)
				.split("\n").length
			const totaltcharacters = fs.readFileSync(
				path.join(process.cwd(), "public", "books", file),
				"utf8",
			).length

			return {
				bookname,
				totalpages,
				totaltcharacters,
			}
		})

	return {
		props: {
			books,
		},
	}
}
