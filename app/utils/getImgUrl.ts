enum EImageSizeKey {
  smallCover = 'system-small-cover',
  mediumCover = 'system-medium-cover',
  largeCover = 'system-large-cover',
  smallContain = 'system-small-contain',
  mediumContain = 'system-medium-contain',
  largeContain = 'system-large-contain',
}

export function getImgUrl(imageId: string | number, key: EImageSizeKey = EImageSizeKey.largeContain): string {
  return `https://cms.korbil.io/assets/${imageId}?key=${key}`
}