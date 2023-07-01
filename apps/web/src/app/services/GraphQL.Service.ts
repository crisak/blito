import { ACategory, AFile } from '@/models/ModelsAdapter.model'

import { withSSRContext, type API } from 'aws-amplify'

export type GetAllWithContentResult = ACategory & { files: Array<AFile> }

class GraphQLService {
  /** Options */
  protected getAPI(): typeof API {
    const SSR = withSSRContext()
    return SSR.API as typeof API
    /**
      const { headers } = await import('next/headers').catch((err) => {
        LogUtil.error('Load headers', err)
        return Promise.reject(err)
      })
      
      const req = {
        headers: {
          cookie: headers().get('cookie')
        }
      }

      const SSR = withSSRContext({ req })
      return SSR.API as typeof API
     */
  }
}

export default GraphQLService
