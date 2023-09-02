import { ACategory, AFile } from '@/models/ModelsAdapter.model'

import { withSSRContext, type API } from 'aws-amplify'

export type GetAllWithContentResult = ACategory & { files: Array<AFile> }

/**
 *
 * This request should be cached until manually invalidated.
 * Similar to `getStaticProps`.
 * `force-cache` is the default and can be omitted.
 * fetch(URL, { cache: 'force-cache' });
 * This request should be refetched on every request.
 * Similar to `getServerSideProps`.
 * fetch(URL, { cache: 'no-store' });
 * This request should be cached with a lifetime of 10 seconds.
 * Similar to `getStaticProps` with the `revalidate` option.
 * fetch(URL, { next: { revalidate: 10 } });
 */

class GraphQLService {
  /** Options */
  protected getAPI(): typeof API {
    const req = {
      headers: {
        'Cache-Control': 'no-store' /** TODO - This not working, make test */,
        cache: 'no-store'
      }
    }
    const SSR = withSSRContext({ req })
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
