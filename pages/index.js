// NextJS libraries:
import Head from 'next/head'
import Link from 'next/link'

// Chakra UI libraries:
import { Box, Heading, Image, Container, Text, VStack } from '@chakra-ui/react'

import Footer from '../components/footer'
import ThemeToggleButton from '../components/themetogglebutton'

export default function Home({}) {
	return (
		<>
			<Head>
				<title>Skrivbok</title>
			</Head>

			<Container maxW="container.md" as="main" height="100vh" pt="20">
				<Box p="3">
					<Box
						width="100%"
						maxHeight="0"
						background="white"
						justifyContent="flex-end"
						display="flex">
						<ThemeToggleButton />
					</Box>

					<Box id="indexHeader" pb={'4'} borderBottom={'solid'}>
						<Heading
							as="h1"
							fontFamily={'Merriweather'}
							size="2xl"
							pb={'2'}
							textAlign="left">
							Skrivbok
						</Heading>
						<Text
							fontFamily={'Merriweather'}
							as="p"
							textAlign="left">
							Skriv snabbt, eller långsamt. Helt som du önskar.
							Läs böcker. Inspirerad av{' '}
							<a
								href="https://typelit.io/"
								className="externalLink"
								rel="noreferrer"
								target="_blank">
								typelit.io
							</a>
							.
						</Text>
						<Text
							fontFamily={'Merriweather'}
							as="p"
							textAlign="left">
							Texter är hämtade från{' '}
							<a
								href="http://runeberg.org/"
								className="externalLink"
								rel="noreferrer"
								target="_blank">
								Project Runeberg
							</a>
							.
						</Text>
					</Box>
				</Box>

				<Box id="indexContent">
					<Box
						className="bookCard"
						w="100%"
						p="2"
						display={'inline-flex'}>
						<Link href="/Kallocain/0">
							<Box h={'100px'}>
								<Image
									className="bookCover"
									src="images/Kallocain.jpg"
									alt="Kallocain"
									p={2}
									sx={{
										':hover': {
											cursor: 'pointer'
										}
									}}
								/>
							</Box>
						</Link>
						<VStack p={2} display={'inline-block'}>
							<Heading
								as="h2"
								fontFamily={'Merriweather'}
								size={'lg'}
								textAlign="left">
								<Link href="/Kallocain/0">Kallocain</Link>
							</Heading>

							<Text
								as="p"
								fontFamily={'Merrriweather'}
								textAlign="left">
								Karin Boye
							</Text>
						</VStack>
					</Box>

					<Box
						className="bookCard"
						w="100%"
						p="2"
						display={'inline-flex'}>
						<Link href="/doktorglas/0">
							<Box h={'100px'}>
								<Image
									className="bookCover"
									src="images/DoktorGlas.jpg"
									alt="Doktor Glas"
									p={2}
									sx={{
										':hover': {
											cursor: 'pointer'
										}
									}}
								/>
							</Box>
						</Link>
						<VStack p={2} display={'inline-block'}>
							<Heading
								as="h2"
								fontFamily={'Merriweather'}
								size={'lg'}
								textAlign="left">
								<Link href="/DoktorGlas/0">Doktor Glas</Link>
							</Heading>
							<Text
								as="p"
								fontFamily={'Merrriweather'}
								textAlign="left">
								Hjalmar Söderberg
							</Text>
						</VStack>
					</Box>

					<Box
						className="bookCard"
						w="100%"
						p="2"
						display={'inline-flex'}>
						<Link href="/KejsarnAvPortugallien/0">
							<Box h={'100px'}>
								<Image
									className="bookCover"
									src="images/KejsarnAvPortugallien.png"
									alt="Kejsarn av Portugallien"
									p={2}
									sx={{
										':hover': {
											cursor: 'pointer'
										}
									}}
								/>
							</Box>
						</Link>
						<VStack p={2} display={'inline-block'}>
							<Heading
								as="h2"
								fontFamily={'Merriweather'}
								size={'lg'}
								textAlign="left">
								<Link href="/KejsarnAvPortugallien/0">
									Kejsarn av Portugallien
								</Link>
							</Heading>
							<Text
								as="p"
								fontFamily={'Merrriweather'}
								size={''}
								textAlign="left">
								Selma Lagerlöf
							</Text>
						</VStack>
					</Box>
				</Box>
				<Footer />
			</Container>
		</>
	)
}
