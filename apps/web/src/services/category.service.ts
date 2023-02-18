import { CategoriesSummaryContents } from '@/models/categories-summary.models'
import { Response } from '@/types'

const paramsDefault = {
  graffiti: 'g'
}

class CategoryService {
  async getCategoriesSummaryContents(
    filter = paramsDefault
  ): Promise<Response<CategoriesSummaryContents>> {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BLITONER_API}/categories/summary-contents?category=${filter.graffiti}`
      ).then((res) => res.json())

      return {
        data: result
      }
    } catch (error) {
      console.error('🚨->', error)

      const message: string =
        error instanceof Error ? error?.message : 'Error internal'

      return {
        error
      }
    }
  }
}

export const categoryService = new CategoryService()
