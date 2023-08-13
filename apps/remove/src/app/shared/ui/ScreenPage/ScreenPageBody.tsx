import { Grid } from '@/app/shared/ui'

type ScreenPageBodyProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ScreenPageBody = ({ children }: ScreenPageBodyProps) => {
  return (
    <Grid.Container gap={2}>
      <Grid
        css={{
          width: '100%'
        }}
      >
        {children}
      </Grid>
    </Grid.Container>
  )
}

export default ScreenPageBody
