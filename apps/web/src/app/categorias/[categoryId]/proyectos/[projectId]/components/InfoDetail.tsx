import { ButtonEditAdmin } from '@/app/shared/components'
import { Box, Text } from '@/app/shared/ui'
import { AFullContent } from '@/models'
import { formatDate, LogUtil } from '@/utils'
import { Badge, Spacer } from '@nextui-org/react'
import ThumbnailMap from './ThumbnailMap'

type InfoDetailProps = {
  project: AFullContent
}

const InfoDetail = ({ project }: InfoDetailProps) => {
  const displayTags = () => {
    if (!project.Tags?.items?.length) {
      return <Text className="opacity-60">Sin tags</Text>
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
        <Text as="h3">Colaboradores</Text>

        <Box css={{ display: 'flex', gap: '0.8rem', flexDirection: 'column' }}>
          {project.Collaborators?.items.map((pro) => (
            <Text
              key={pro?.collaboratorId}
              css={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'all .3s'
              }}
              className="hover:opacity-70"
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
      return <Text className="opacity-60">Sin ubicación</Text>
    }

    const position = {
      lat: project.location.position.latitude,
      lng: project.location.position.longitude
    }

    return <ThumbnailMap position={position} />
  }

  return (
    <>
      <Text as="h2">{project.project?.name}</Text>
      <Spacer y={1} />

      <Text>{project.project?.description}</Text>
      <Spacer y={2} />

      <ButtonEditAdmin
        onClick={() => {
          LogUtil.debug('Edit tag')
        }}
      >
        <Text as="h3">Tags </Text>
      </ButtonEditAdmin>

      {displayTags()}
      <Spacer y={2} />

      {displayCollaborators()}

      <Text as="h3">Detalles</Text>
      <Box>
        <Text as="b">Fecha: </Text>
        <Text as="span" className="font-light">
          {formatDate(project.date)}
        </Text>
      </Box>
      <Box>
        <Text as="b">Categoría: </Text>
        <Text as="span" className="font-light">
          {project.Category?.name || ''}
        </Text>
      </Box>
      <Spacer y={2} />

      <Text as="h3">Ubicación</Text>
      {displayPosition()}
      <Spacer y={2} />
    </>
  )
}

export default InfoDetail
