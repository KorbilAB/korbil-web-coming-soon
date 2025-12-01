<template>
  <div class="blog-article-page  g-container">
    <div
        v-if="pending"
        class="blog-article-page__content  g-container-inner"
    >
      <BasePreloader size="large" style="min-height: 100px"/>
    </div>
    <div
        v-else-if="article"
        class="blog-article-page__content  g-container-inner"
    >
      <div class="blog-article-page__main">
        <div
            v-if="category"
            v-motion-fade-up
            class="blog-article-page__tags"
        >
          <div class="blog-article-page__tag">
            {{ category.name }}
          </div>
        </div>

        <time
            v-motion-fade-up
            :delay="200"
            :datetime="article.date_created"
            class="blog-article-page__date"
        >
          {{ formatDate(article.date_created) }}
        </time>

        <h1
            v-motion-fade-up
            :delay="300"
            class="blog-article-page__title"
        >
          {{ articleData.title }}
        </h1>

        <NuxtPicture
            v-if="article.featured_image"
            :src="getImgUrl(article.featured_image)"
            v-motion-fade-up
            :delay="400"
            sizes="xs:700 488"
            class="blog-article-page__img"
        />

        <BaseText
            v-motion-fade-up
            :delay="400"
            :text="articleData.content"
        />
      </div>
    </div>
    {{ error }}
  </div>
</template>

<script setup lang="ts">
import { useApiLanguage } from '~/composables/useApiLanguage'
import { getImgUrl } from '~/utils/getImgUrl'

const route = useRoute()
const language = useApiLanguage()
const slug = computed(() => route.params.slug)

const query = computed(() => {
  return {
    fields: [
      '*',
      'featured_image.*',
      'seo_image.*',
      'category.*',
      'category.translations.*',
      'translations.*',
    ].join(','),
    'deep[translations][_filter][languages_code][_eq]': language.value,
    'deep[category.translations][_filter][languages_code][_eq]': language.value,
    filter: {
      status: {
        _eq: 'published'
      },
      translations: {
        slug: {
          _eq: slug.value
        }
      }
    },

    meta: '*',
    date_created: 'date:desc'
  }
})

const { data: article, error, status, pending } = await useFetch('https://cms.korbil.io/items/blogs', {
  query,
  watch: [slug],
  transform: (res: any) => {
    return res?.data?.[0] || null
  }
})

watch(status, (status) => {
  if (status === 'success' && !article.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
      fatal: true,
    })
  }
}, { immediate: true })

const articleData = computed(() => article.value?.translations[0])
const category = computed(() => article.value?.category?.translations.find((t: any) => t.languages_code === language.value))

useSeoMeta({
  title: () => articleData.value?.title,
  description: () => articleData.value?.seo_description,
  keywords: () => articleData.value?.seo_keywords,
})

function formatDate(date: string | number | Date) {
  const dateInner = new Date(date)

  return new Intl.DateTimeFormat("en-GB", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateInner)
}
</script>

<style lang="scss">
.blog-article-page {

  &__content {
    padding: 80px 0;
  }

  &__main {
    margin: 0 auto;
    width: 700px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__tags {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
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
    margin: 0 auto 16px;

    font-size: 14px;
    font-weight: inherit;
    color: inherit;
  }

  &__title {
    margin: 0 0 60px;

    font-size: 56px;
    text-align: center;
  }

  &__img {
    width: 100%;
    display: flex;
    border-radius: $radius-l;
    overflow: hidden;
    margin-bottom: 60px;

    & img {
      width: 100%;
    }
  }

  @include media-sm {
    &__title {
      font-size: 40px;
    }
  }
}
</style>