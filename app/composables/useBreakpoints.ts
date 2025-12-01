import type { TBreakpointsConfig } from "~~/nuxt.config";

export function useBreakpoints(): TBreakpointsConfig {
  const config = useRuntimeConfig()

  return config.public.breakpoints as TBreakpointsConfig
}