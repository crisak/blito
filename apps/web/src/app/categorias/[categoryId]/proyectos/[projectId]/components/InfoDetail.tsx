import { Box, Text } from '@/app/components'
import { formatDate } from '@/utils'
import { Badge, Spacer } from '@nextui-org/react'
import ThumbnailMap from './ThumbnailMap'
import { AContent } from '@/models'

type InfoDetailProps = {
  project: AContent
}

const InfoDetail = ({ project }: InfoDetailProps) => {
  const displayTags = () => {
    if (!project.Tags?.items?.length) {
      return <Text css={{ opacity: '.6' }}>Sin tags</Text>
    }

    const tags = project.Tags.items

    return (
      <Box css={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Badge key={tag?.tagId} size="md">
            {tag?.tag.name}
          </Badge>
        ))}
      </Box>
    )
  }

  const displayCollaborators = () => {
    return (
      <>
        <Text h3>Colaboradores</Text>

        <Box css={{ display: 'flex', gap: '0.8rem', flexDirection: 'column' }}>
          {project.Collaborators?.items.map((pro) => (
            <Text
              key={pro?.collaboratorId}
              css={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'all .3s',
                '&:hover': { opacity: '.7' }
              }}
            >
              {pro?.collaborator?.username}
            </Text>
          ))}
        </Box>

        <Spacer y={2} />
      </>
    )
  }

  const displayPosition = () => {
    if (
      !project.location?.position?.latitude &&
      !project.location?.position?.longitude
    ) {
      return <Text css={{ opacity: '.6' }}>Sin ubicación</Text>
    }

    const position = {
      lat: project.location.position.latitude,
      lng: project.location.position.longitude
    }

    return <ThumbnailMap position={position} />
  }

  return (
    <>
      <Text h2>{project.project?.name}</Text>
      <Spacer y={1} />

      <Text>{project.project?.description}</Text>
      <Spacer y={2} />

      <Text h3>Tags</Text>
      {displayTags()}
      <Spacer y={2} />

      {displayCollaborators()}

      <Text h3>Detalles</Text>
      <Box>
        <Text b>Fecha: </Text>
        <Text span weight="light">
          {formatDate(project.date)}
        </Text>
      </Box>
      <Box>
        <Text b>Categoría: </Text>
        <Text span weight="light">
          {project.Category?.name || ''}
        </Text>
      </Box>
      <Spacer y={2} />

      <Text h3>Ubicación</Text>
      {displayPosition()}
      <Spacer y={2} />
    </>
  )
}

export default InfoDetail
