'use client'

export default class DomUtil {
  static getParent<T = HTMLElement>(
    element: HTMLElement,
    matchElement: keyof JSX.IntrinsicElements
  ): T | null {
    let notFoundElement = false
    let selectionElement: T | null = null

    if (element.tagName.toLowerCase() === matchElement) {
      selectionElement = element as T
    } else {
      let count = 0

      while (
        // @ts-ignore
        selectionElement?.tagName?.toLowerCase() !== matchElement
      ) {
        // @ts-ignore
        selectionElement = (selectionElement?.parentNode ||
          element.parentNode) as HTMLElement
        count++
        /** Prevent error of performance */
        if (count > 100) {
          console.warn('Element not found, finished process for performance')

          notFoundElement = true
          break
        }
      }
    }

    return notFoundElement ? null : selectionElement
  }
}
