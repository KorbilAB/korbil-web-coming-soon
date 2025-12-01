export type TProps = {
  paddingElements?: (HTMLElement | string | null)[]
}

export function disableScroll(props?: TProps): void {
  if (import.meta.client) {
    const body = document.body
    const html = document.documentElement
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    html.style.overflow = 'hidden'
    body.style.paddingRight = scrollbarWidth + 'px'

    if (!props) {
      return
    }

    const paddingElements = reducePaddingElements(props.paddingElements)

    paddingElements.forEach((el) => {
      const paddingRight: number = parseInt(window.getComputedStyle(el).paddingRight) || 0
      el.style.paddingRight = paddingRight + scrollbarWidth + 'px'
    })
  }
}

export function enableScroll(props?: TProps): void {
  if (import.meta.client) {
    const body = document.body
    const html = document.documentElement

    html.style.overflow = ''
    body.style.paddingRight = ''

    if (!props) {
      return
    }

    const paddingElements = reducePaddingElements(props.paddingElements)

    paddingElements.forEach((el) => {
      el.style.paddingRight = ''
    })
  }
}

function reducePaddingElements(paddingElements?: (string | HTMLElement | null)[]): HTMLElement[] {
  return paddingElements?.map((el) => {
    if (typeof el === 'string') {
      return document.querySelector(el)
    }

    return el
  }).filter((el) => el) as HTMLElement[]
}