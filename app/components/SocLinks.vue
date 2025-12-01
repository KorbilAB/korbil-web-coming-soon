<template>
  <div class="soc-links">
    <a
        href="#"
        class="soc-links__link"
    >
      <IconInstagram/>
    </a>
    <a
        href="#"
        class="soc-links__link"
    >
      <IconTikTok/>
    </a>
    <a
        href="#"
        class="soc-links__link"
    >
      <IconLinkedin/>
    </a>
  </div>
</template>

<script setup lang="ts">
import IconInstagram from "~/components/icons/IconInstagram.vue";
import IconTikTok from "~/components/icons/IconTikTok.vue";
import IconLinkedin from "~/components/icons/IconLinkedin.vue";
</script>

<style lang="scss">
.soc-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  &__link {
    display: flex;
    opacity: 0.6;

    color: white;

    transition: $time;

    & svg {
      width: 32px;
      height: 32px;
    }

    @include hover {
      opacity: 1;
    }
  }
}
</style>