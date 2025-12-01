<template>
  <article
      class="article-preview"
      @click.prevent="onClick"
  >
    <NuxtPicture
        v-if="article.featured_image"
        :src="getImgUrl(article.featured_image)"
        sizes="md:386 sm:482 xs:356 488"
        class="article-preview__img"
    />
    <div class="article-preview__img">

    </div>
    <div class="article-preview__content">
      <div class="article-preview__top">
        <div
            v-if="category"
            class="article-preview__tags"
        >
          <div class="article-preview__tag">
            {{ category.name }}
          </div>
        </div>

        <time
            :datetime="article.published_date"
            class="article-preview__date"
        >
          {{ formatDate(article.published_date) }} {{ article.published_date }}
        </time>
      </div>
      <h3 class="article-preview__title">
        <NuxtLinkLocale :to="path">
          {{ articleData.title }}
        </NuxtLinkLocale>
      </h3>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useApiLanguage } from '~/composables/useApiLanguage'
import { getImgUrl } from '~/utils/getImgUrl'

const props = defineProps<{
  article: Record<string, any>
}>()

const localePath = useLocalePath()
const language = useApiLanguage()

const articleData = computed(() => props.article.translations[0])
const category = computed(() => props.article.category.translations.find((t: any) => t.languages_code === language.value))
const path = computed(() => {
  return `/blogs/${articleData.value.slug}`
})

function formatDate(date: string | number | Date) {
  if (!date) {
    return
  }

  const dateInner = new Date(date)

  return new Intl.DateTimeFormat("en-GB", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateInner)
}

function onClick() {
  navigateTo(localePath(path.value))
}
</script>

<style lang="scss">
.article-preview {
  cursor: pointer;

  &__img {
    width: 100%;
    display: flex;
    border-radius: $radius-l;
    overflow: hidden;
    margin-bottom: 16px;
    background-color: $c-gray-lightest;

    & img {
      width: 100%;
    }
  }

  &__content {
    padding: 16px;
  }

  &__top {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 8px;
  }

  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__tag {
    padding: 0 8px;
    border-radius: $radius;
    background-color: $c-teal-lightest;

    font-size: 14px;
    line-height: 20px;
    color: $c-teal;
  }

  &__date {
    font-size: 14px;
    font-weight: inherit;
    color: inherit;
  }

  &__title {
    margin: 0;

    font-size: inherit;
    font-weight: $w-DMSans-semi-bold;

    & a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>