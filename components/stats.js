import { Box, Container, Text } from "@chakra-ui/react"

export default function Stats({ timeElapsed, errorCount, page }) {
  return (
    <Container maxW="container.lg" as="main" p="0">
      <Box width="100%" maxHeight="0" justifyContent="flex-end">
        <Text fontFamily="monospace" fontSize="xs" pb={3} textAlign="right">
          <span>Ord på sidan: {page.split(" ").length}</span>
          <br />
          <span> {errorCount} fel </span>
          <br />
          <span>
            [{Math.floor(timeElapsed / 60)}m : {timeElapsed % 60}s]
          </span>
        </Text>
      </Box>
    </Container>
  )
}
