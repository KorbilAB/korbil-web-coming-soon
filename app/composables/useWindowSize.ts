import { onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import { useBreakpoints } from '~/composables/useBreakpoints'

interface IWindowSizeProps {
  includeScrollbar?: boolean
}

interface IWindowSize {
  x: Ref<number>
  y: Ref<number>
  isXXL: Ref<boolean>
  isXL: Ref<boolean>
  isLG: Ref<boolean>
  isMD: Ref<boolean>
  isSM: Ref<boolean>
  isXS: Ref<boolean>
  isMob: Ref<boolean>
  isXXLOrSmaller: Ref<boolean>
  isXLOrSmaller: Ref<boolean>
  isLGOrSmaller: Ref<boolean>
  isMDOrSmaller: Ref<boolean>
  isSMOrSmaller: Ref<boolean>
  isXSOrSmaller: Ref<boolean>
  isMobOrSmaller: Ref<boolean>
}

export function useWindowSize(props: IWindowSizeProps = {}): IWindowSize {
  const device = useDevice()
  const breakpoints = useBreakpoints()

  const x = useState<number>(() => getWindowWidth(props.includeScrollbar))
  const y = useState<number>(() => getWindowHeight(props.includeScrollbar))

  const isXXL = useState('isXXL', () => false)
  const isXL = useState('isXL', () => false)
  const isLG = useState('isLG', () => true)
  const isMD = useState('isMD', () => false)
  const isSM = useState('isSM', () => false)
  const isXS = useState('isXS', () => false)
  const isMob = useState('isXS', () => false)

  const isXXLOrSmaller = useState(() => false)
  const isXLOrSmaller = useState(() => false)
  const isLGOrSmaller = useState(() => true)
  const isMDOrSmaller = useState(() => false)
  const isSMOrSmaller = useState(() => false)
  const isXSOrSmaller = useState(() => false)
  const isMobOrSmaller = useState(() => false)

  function update(): void {
    x.value = getWindowWidth(props.includeScrollbar)
    y.value = getWindowHeight(props.includeScrollbar)

    isXXL.value = x.value > breakpoints.xl
    isXL.value = x.value <= breakpoints.xl && x.value > breakpoints.lg
    isLG.value = x.value <= breakpoints.lg && x.value > breakpoints.md
    isMD.value = x.value <= breakpoints.md && x.value > breakpoints.sm
    isSM.value = x.value <= breakpoints.sm && x.value > breakpoints.xs
    isXS.value = x.value <= breakpoints.xs
    isMob.value = isSM.value

    isXXLOrSmaller.value = x.value <= breakpoints.xxl
    isXLOrSmaller.value = x.value <= breakpoints.xl
    isLGOrSmaller.value = x.value <= breakpoints.lg
    isMDOrSmaller.value = x.value <= breakpoints.md
    isSMOrSmaller.value = x.value <= breakpoints.sm
    isXSOrSmaller.value = x.value <= breakpoints.xs
    isMobOrSmaller.value = isSMOrSmaller.value
  }

  function initialize(): void {
    update()

    const throttledUpdate = throttle(update, 200)

    onMounted(() => {
      if (import.meta.client) {
        update()
        window.addEventListener('resize', throttledUpdate)
      }
    })

    onUnmounted(() => {
      if (import.meta.client) {
        window.removeEventListener('resize', throttledUpdate)
        throttledUpdate.cancel()
      }
    })
  }

  initialize()
  nextTick(() => {
    update()
  }).then()

  function getWindowWidth(includeScrollbar?: boolean): number {
    if (!import.meta.client) {
      if (device.isMobile) {
        return 375
      } else if (device.isTablet) {
        return 768
      } else {
        return  1366
      }
    }
    return includeScrollbar ? window.innerWidth : document.documentElement?.clientWidth
  }

  function getWindowHeight(includeScrollbar?: boolean): number {
    if (!import.meta.client) {
      if (device.isMobile) {
        return 667
      } else if (device.isTablet) {
        return 768
      } else {
        return 768
      }
    }

    return includeScrollbar ? window.innerHeight : document.documentElement?.clientHeight
  }

  return {
    x,
    y,
    isXXL,
    isXL,
    isLG,
    isMD,
    isSM,
    isXS,
    isMob,
    isXXLOrSmaller,
    isXLOrSmaller,
    isLGOrSmaller,
    isMDOrSmaller,
    isSMOrSmaller,
    isXSOrSmaller,
    isMobOrSmaller,
  }
}
