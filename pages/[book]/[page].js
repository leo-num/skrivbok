export async function getStaticProps({ params }) {
	const book = params.book
	const page = params.page
	const fs = require('fs')
	const path = require('path')
	const filePath = path.join(process.cwd(), 'public/books/' + book + '.txt')
	const fileContent = fs.readFileSync(filePath, 'utf8').split('\n')
	return {
		props: {
			book: fileContent[page],
			bookTitle: book,
			pageNumber: page,
			totalPageNumber: fileContent.length
		}
	}
}

export async function getStaticPaths() {
	const fs = require('fs')
	const path = require('path')
	const filePath = path.join(process.cwd(), 'public/books')
	const files = fs
		.readdirSync(filePath, { withFileTypes: true })
		// Only keep the .txt files
		.filter(dirent => dirent.name.endsWith('.txt'))
		.map(dirent => dirent.name)
	//.filter(dirent => dirent.isFile())
	//.map(dirent => dirent.name)

	let paths = []
	for (const file of files) {
		const book = file.replace('.txt', '')
		const pages = fs
			.readFileSync(path.join(filePath, file), 'utf8')
			.split('\n').length
		for (let i = 0; i < pages; i++) {
			paths.push({
				params: {
					book,
					page: i.toString()
				}
			})
		}
	}
	return {
		paths,
		fallback: false
	}
}

import Pagedisplay from '../../components/pagedisplay'
import Layout from '../../components/layout'
import Footer from '../../components/footer'

export default function Book({ book, bookTitle, pageNumber, totalPageNumber }) {
	return (
		<Layout>
			<Pagedisplay
				book={book}
				bookTitle={bookTitle}
				pageNumber={pageNumber}
				totalPageNumber={totalPageNumber}
			/>
			<Footer />
		</Layout>
	)
}
