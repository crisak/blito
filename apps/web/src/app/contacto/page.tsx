import BgFormContact from '@/assets/images/bg-form-contact.jpg'
import { Box } from '@/app/shared/ui'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import Image from 'next/image'
import FormContact from './components/FormContact'

const PageContact = () => {
  return (
    <Box
      css={{
        height: `calc(100vh - ${HEIGHT_NAVBAR})`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr'
      }}
    >
      <Box>
        <Image
          src={BgFormContact.src}
          alt="Grafiti con temática ambiental"
          fill
          style={{
            filter: 'brightness(.2) grayscale(.2)',
            objectFit: 'cover'
          }}
        />
      </Box>

      <FormContact />
    </Box>
  )
}

export default PageContact
