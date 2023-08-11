import { GoogleMaps, Marker } from '@/app/components'
import { Box } from '@/app/shared/components'
// import { BORDER_RADIUS } from '@/styles/variables'
import { Modal, ModalBody, useDisclosure } from '@nextui-org/react'

type ThumbnailMapProps = {
  position: {
    lat: number
    lng: number
  }
}

const containerThumbnailMap = {
  width: 300,
  height: 300,
  position: 'relative',
  transition: 'all .3s'
  // '&::after': {
  //   content: '',
  //   transition: 'all .3s',
  //   backgroundColor: 'auto'
  // },
  // '&:hover': {
  //   transition: 'all .3s',
  //   zIndex: 10,
  //   cursor: 'pointer',

  // '&::after': {
  //   content: '🔎 Abrir mapa',
  //   transition: 'all .3s',
  //   borderRadius: BORDER_RADIUS,
  //   backgroundColor: '#09192b90',
  //   color: '#ffffff',
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   top: '0',
  //   left: '0',
  //   fontSize: '$3xl',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backdropFilter: 'blur(3px)'
  // } as React.CSSProperties
  // }
} as React.CSSProperties

const ThumbnailMap = ({ position }: ThumbnailMapProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box onClick={() => onOpen()} css={containerThumbnailMap}>
        <GoogleMaps
          options={{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false
          }}
          center={position}
          zoom={14}
          mapContainerStyle={{
            maxWidth: '300px',
            height: '300px'
          }}
        >
          <Marker position={position} />
        </GoogleMaps>
      </Box>
      <Modal
        closeButton
        scrollBehavior="normal"
        backdrop="blur"
        className="pt-0 w-full"
        aria-labelledby="modal-full-map"
        aria-describedby="ubicación-del-grafiti"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalBody className="py-10">
          <GoogleMaps
            options={{
              fullscreenControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: true
            }}
            center={position}
            zoom={14}
            mapContainerStyle={{
              width: '100%',
              height: '100vh'
            }}
          >
            <Marker position={position} />
          </GoogleMaps>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ThumbnailMap
