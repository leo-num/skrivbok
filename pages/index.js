import Link from 'next/link'
import Text from '@chakra-ui/react'

import Layout from '../components/layout'
import BookText from '../components/booktext'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Layout>
      <BookText />
      <Footer />
    </Layout>
  )
}
