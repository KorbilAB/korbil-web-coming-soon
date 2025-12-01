<template>
  <div
      v-if="text"
      :class="getHTMLClass()"
      class="base-text"
      v-html="text"
  />
  <div
      v-else
      :class="getHTMLClass()"
      class="base-text"
  >
    <slot/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string
  size?: 'default'
}>()

function getHTMLClass() {
  return {
    [`_size-${props.size}`]: props.size && props.size !== 'default'
  }
}
</script>

<style lang="scss">
.base-text {

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & p,
  & ul,
  & ol {
    margin: 16px 0;
  }

  & li {

  }

  & b {
    font-weight: $w-DMSans-bold;
  }

  // TITLES

  & h1 {
    margin: 40px 0 24px;
  }

  & h2 {
    margin: 40px 0 24px;
  }

  & h3 {
    margin: 40px 0 16px;
  }

  & h4 {
    margin: 28px 0 16px;
  }

  & h5 {
    margin: 24px 0 16px;
  }

  & h6 {
    margin: 24px 0 16px;
  }

  // TABLE

  & table {
    display: block;
    border-collapse: collapse;
    margin: 24px 0;
    border: 1px solid $c-teal-lighter;
    border-radius: $radius;
    overflow-x: auto;
  }

  & thead,
  & tbody,
  & tfoot {
    min-width: 500px;
  }

  & th,
  & td {
    min-width: 180px;
    padding: 8px 16px;
    border: 1px solid $c-teal-lighter;
    border-top: 0;
    border-left: 0;
    border-radius: $radius;

    text-align: left;

    &:last-child {
      border-right: 0;
    }
  }

  & tr:last-child td {
    border-bottom: 0;
  }

  & th {
    font-weight: $w-DMSans-semi-bold;
    color: $c-gray;
  }

  // IMG

  & img {
    height: auto !important;
    width: auto !important;
    max-width: 100%;
  }
}
</style>
