import { ACollaborator, ASocialNetwork } from '@/models'

export type FASocialNetwork = ASocialNetwork & { id: string }

/** F = Form */

export type FACollaborator = Omit<ACollaborator, 'socials'> & {
  socials: Array<FASocialNetwork>
}
