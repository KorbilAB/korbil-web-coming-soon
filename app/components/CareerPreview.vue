<template>
  <article
      class="career-preview"
      @click.prevent="onClick"
  >
    <div class="career-preview__title">
      Co-Founder: Marketing & Sales Specialist at Körbil
    </div>
    <div class="career-preview__chips">
      <BaseChip>
        <IconMapPoint style="width: 16px; height: 17px;"/>
        Sweden
      </BaseChip>
      <BaseChip>
        <IconRemote style="width: 16px; height: 17px;"/>
        Remote
      </BaseChip>
    </div>

    <NuxtLinkLocale
        :to="path"
        class="career-preview__link"
    >
      {{ t('career-preview.more-link') }}

      <IconsIconArrowLongRight/>
    </NuxtLinkLocale>
  </article>
</template>

<script setup lang="ts">
import IconRemote from "~/components/icons/IconRemote.vue";
import IconMapPoint from "~/components/icons/IconMapPoint.vue";

const { t } = useI18n()

const localePath = useLocalePath()

const path = computed(() => {
  return `/careers/1`
})

function onClick() {
  navigateTo(localePath(path.value))
}
</script>

<style lang="scss">
.career-preview {
  padding: 16px;
  border-radius: $radius-l;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;

  transition: $time;

  @include hover {
    background-color: #e0f0f1;
    box-shadow:  0 0 0 1px $c-teal-light;
  }

  &__title {
    margin: 0;

    font-family: $ff-Poppins;
    font-weight: $w-Poppins-semi-bold;
    font-size: 24px;
    line-height: 1.33;
    color: $c-gray-black;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__link {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: $w-DMSans-semi-bold;
    color: $c-teal;
    text-decoration: none;

    & svg {
      width: 21px;
      height: 21px;

      transition: $time;
    }
  }

  @include hover {
    .career-preview__link svg {
      transform: translateX(4px);
    }
  }
}
</style>