export const motionConfig = {
  directives: {
    'fade-down': {
      initial: {
        y: -30,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          ease: 'easeOut',
          duration: 300,
          delay: 100,
        }
      }
    },
    'fade-up': {
      initial: {
        y: 30,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          ease: 'easeOut',
          duration: 300,
          delay: 100,
        }
      }
    }
  }
}