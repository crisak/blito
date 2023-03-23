import { ACategory, AFile } from '@/models/ModelsAdapter.model'

export type GetAllWithContentResult = ACategory & { files: Array<AFile> }
