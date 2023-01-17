export async function getStaticProps({ params }) {
  const book = params.book
  const page = params.page
  const fs = require("fs")
  const path = require("path")

  const filePath = path.join(process.cwd(), "public/books/" + book + ".txt")

  const fileContent = fs.readFileSync(filePath, "utf8").split("\n")
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
  const fs = require("fs")
  const path = require("path")
  const filePath = path.join(process.cwd(), "public/books")
  const files = fs
    .readdirSync(filePath, { withFileTypes: true })
    // Only keep the .txt files
    .filter(dirent => dirent.name.endsWith(".txt"))
    .map(dirent => dirent.name)
  //.filter(dirent => dirent.isFile())
  //.map(dirent => dirent.name)

  let paths = []
  for (const file of files) {
    const book = file.replace(".txt", "")
    const pages = fs.readFileSync(path.join(filePath, file), "utf8").split("\n").length
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

import { Box, Container } from "@chakra-ui/react"
import Link from "next/link"
import Pagedisplay from "../../components/pagedisplay"
import Footer from "../../components/footer"

import SwitchFontFamily from "../../components/switchfontfamily"
import ThemeToggleButton from "../../components/themetogglebutton"

export default function Book({ book, bookTitle, pageNumber, totalPageNumber }) {
  return (
    <>
      <Container maxW="container.lg" as="main" pt="2">
        <Box maxHeight="0" justifyContent="flex-start" display="flex">
          <Link href="/" target={"_self"}>
            <a>Tillbaka</a>
          </Link>
        </Box>
        <Box maxHeight="0" justifyContent="flex-end" display="flex">
          <SwitchFontFamily />
          <ThemeToggleButton />
        </Box>
      </Container>
      <Container maxW="container.lg" as="main" pt="20">
        <Pagedisplay
          book={book}
          bookTitle={bookTitle}
          pageNumber={pageNumber}
          totalPageNumber={totalPageNumber}
        />
        <Footer />
      </Container>
    </>
  )
}
