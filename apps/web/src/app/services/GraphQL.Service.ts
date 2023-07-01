import { ACategory, AFile } from '@/models/ModelsAdapter.model'

import { withSSRContext, type API } from 'aws-amplify'
import { headers } from 'next/headers'

export type GetAllWithContentResult = ACategory & { files: Array<AFile> }

class GraphQLService {
  /** Options */
  protected getAPI(options?: { public: boolean }): typeof API {
    /** Required auth with API KEY */
    if (options?.public) {
      const SSR = withSSRContext()
      return SSR.API as typeof API
    }

    /** Required auth with Cognito */
    const req = {
      headers: {
        cookie: headers().get('cookie')
      }
    }

    const SSR = withSSRContext({ req })
    return SSR.API as typeof API
  }
}

export default GraphQLService
