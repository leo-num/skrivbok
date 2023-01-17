import { Box, Heading } from "@chakra-ui/react"
export default function Pagetitle({ bookTitle }) {
  return (
    <Box borderBottom={"1px solid"}>
      <Heading as="h1" fontFamily={"Merriweather"} size="2xl" pb={"2"} textAlign="left">
        {bookTitle && bookTitle.replace(/([A-Z])/g, " $1")}
      </Heading>
    </Box>
  )
}
