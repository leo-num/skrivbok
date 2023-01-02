import { useState, useEffect } from 'react'

import { Heading, Text } from '@chakra-ui/react'

import Layout from './layout'

export default function BookText() {
  const [position, setPosition] = useState(0)

  const [thumbsUpVisible, setThumbsUpVisible] = useState(false)

  const paragraph =
    'Den bok jag nu sätter mig ner att skriva måste verka meningslös på många - om jag alls vågar tänka mig, att "många" får läsa den - eftersom jag alldeles självmant, utan någons order, börjar ett sådant arbete och ändå inte själv är riktigt på det klara med vad avsikten är. Jag vill och måste, det är alltsammans. Allt mer och mer obönhörligt frågar man efter avsikten och planmässigheten i vad som göres och säges, så att helst inte ett ord ska falla på måfå - det är bara författaren till den här boken som har tvingats gå motsatta vägen, ut i det ändamålslösa. Ty fast mina år här som fånge och kemist - de måste vara över tjugu, tänker jag mig - har varit fulla nog ändå av arbete och brådska, måste det finnas något som inte tycker det är tillräckligt och som har lett och överblickat ett annat arbete inom mig, ett som jag själv inte hade någon möjlighet att överblicka och där jag ändå har varit djupt och nästan plågsamt medintresserad. Det arbetet kommer att vara slutfört, när jag väl har skrivit ner min bok. Jag inser alltså, hur förnuftsvidriga mina skriverier måste te sig inför allt rationellt och praktiskt tänkande, men jag skriver ändå.'

  const moveCursor = direction => {
    if (direction === 'forward') {
      setPosition(prevPos => prevPos + 1)
    } else if (direction === 'backward') {
      setPosition(prevPos => prevPos - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === paragraph[position] && event.key !== ' ') {
        // The key pressed is the correct one, and not spacebar.
        position = position + 1
        moveCursor('forward')
      } else if (event.key === paragraph[position] && event.key === ' ') {
        // The key pressed is the correct one, and is spacebar.
        event.preventDefault()
        position = position + 1
        moveCursor('forward')
      } else if (event.key === 'Backspace') {
        moveCursor('backward')
        position = position - 1
      } else {
        // The wrong key is pressed, ignore it. Prevent document from scrolling.
        event.preventDefault()
      }

      if (position === paragraph.length) {
        // make the thumbs up image visible
        setThumbsUpVisible(true)
      }

      const spanElement = document.querySelector('.highlighted-char')
      spanElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      })
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Layout>
      <Heading fontSize="1.8rem">Kallocain av Karin Boye</Heading>
      <Heading mb={3} fontSize="1.5rem">
        Första kapitlet
      </Heading>

      <Text fontSize="1.5rem" lineHeight="2.3rem">
        <span className="highlighted">{paragraph.substring(0, position)}</span>
        <span className="highlighted-char">
          {paragraph.substring(position, position + 1)}
        </span>
        {paragraph.substring(position + 1)}
      </Text>
      {thumbsUpVisible && (
        <img className="image-thumbs-up" src="/images/thumbs-up.png"></img>
      )}
    </Layout>
  )
}
