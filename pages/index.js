import Layout from '../components/layout'
import BookText from '../components/booktext'
import Footer from '../components/Footer'
import SwitchMonospace from '../components/SwitchMonospace'
import SwitchTheme from '../components/SwitchTheme'
import { Box } from '@chakra-ui/react'

export default function Home() {
	return (
		<Layout>
			<BookText />
			<Footer />
		</Layout>
	)
}
