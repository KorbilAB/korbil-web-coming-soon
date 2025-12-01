<template>
  <component
    :is="computedTag()"
    :to="to"
    :disabled="disabled"
    class="base-btn"
    :class="{
      [`_${size}`]: !!size,
      [`_${color}`]: !!color,
      _outlined: outlined,
      _rounded: rounded,
      _shadow: shadow,
      _loading: loading,
    }"
  >
    <slot name="icon-prepend">
      <component
        :is="iconPrepend"
        v-if="iconPrepend"
      />
    </slot>

    <span
      v-if="$slots.default"
      class="base-btn__content"
    >
      <slot />
    </span>

    <slot name="icon-append">
      <component
        :is="iconAppend"
        v-if="iconAppend"
      />
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { NuxtLinkLocale } from '#components'
import type { DefineComponent } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to?: RouteLocationRaw | null
  tag?: string
  iconPrepend?: DefineComponent<any, any, any> | null
  iconAppend?: DefineComponent<any, any, any> | null
  color?: 'light-teal' | 'light-green' | null
  size?: 'small'
  type?: 'ui'
  disabled?: boolean
  outlined?: boolean
  rounded?: boolean
  shadow?: boolean
  loading?: boolean | null
}>()

function computedTag() {
  if (props.tag) {
    return props.tag
  }

  if (props.to) {
    return NuxtLinkLocale
  }

  return 'button'
}
</script>

<style lang="scss">
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 48px;
  padding: 8px 16px;
  margin: 0;
  z-index: 1;
  box-sizing: border-box;
  background: $c-teal;
  border: 0;
  border-radius: $radius;
  box-shadow: none;
  cursor: pointer;
  user-select: none;

  font-family: $ff-DMSans;
  font-weight: $w-DMSans-semi-bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  color: white;

  transition: $time;

  @include hover {
    background-color: $c-teal-semi-light;

    color: white;
  }

  &:disabled {
    background-color: $c-teal-light;
    cursor: default;

    color: $c-teal-lightest;
  }

  & svg {
    position: relative;
    flex-shrink: 0;
    width: 24px;
    height: 24px;

    transition: fill $time;

    &:first-child {
      margin-right: 6px;
    }

    &:last-child {
      margin-left: 6px;
    }

    &:first-child:last-child {
      margin: 0 !important;
    }
  }

  &._rounded {
    border-radius: 24px;
  }

  // -- sizes --

  &._small {
    min-height: 36px;
    padding: 6px 12px;

    font-size: 14px;
    line-height: 16px;
    font-weight: $w-DMSans-medium;

    & svg {
      width: 20px;
      height: 20px;
    }
  }

  // -- colors --

  &._light-teal {
    background-color: $c-teal-lightest;

    color: $c-teal;

    @include hover {
      background-color: $c-teal;

      color: white;
    }

    &:disabled {
      background-color: $c-teal-lightest;

      color: $c-teal-light;
    }
  }

  &._light-green {
    background-color: #EAFDF3;

    color: #00545D;

    @include hover {
      background-color: #B5DFC9;

      color: #00545D;
    }

    &:disabled {
      background-color: #EAFDF3;

      color: $c-teal-light;
    }
  }

  // -- outlined --

  &._outlined {
    background-color: transparent;
    box-shadow: inset 0 0 0 1px $c-teal;

    color: $c-teal;

    @include hover {
      box-shadow: inset 0 0 0 1px $c-teal-semi-light;
      background-color: $c-teal-semi-light;

      color: white;
    }
  }

  &._outlined:disabled {
    background-color: white;
    box-shadow: inset 0 0 0 1px $c-teal-lightest;

    color: $c-teal-light;
  }

  // -- colors & outlined --

  &._light-green._outlined {
    background-color: #EAFDF3;
    box-shadow: inset 0 0 0 1px #B5DFC9;

    color: #00545D;

    @include hover {
      background-color: #00545D;
      box-shadow: inset 0 0 0 1px #00545D;

      color: white;
    }

    &:disabled {
      background-color: #EAFDF3;

      color: $c-teal-light;
    }
  }

  // -- colors & outlined & shadow --

  &._light-green._outlined._shadow {
    box-shadow: inset 0 0 0 1px $c-teal-lightest, 0 1px 2px rgba($c-teal-dark, 0.25);

    @include hover {
      box-shadow: inset 0 0 0 1px #00545D, 0 1px 2px rgba($c-teal-dark, 0.25);
    }
  }
}
</style>