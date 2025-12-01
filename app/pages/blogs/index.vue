<template>
  <div class="blog-list-page  g-container">
    <div class="blog-list-page__content  g-container-inner">
      <h1
          v-motion-fade-up
          class="blog-list-page__title"
      >
        {{ t('blog-list-page.title') }}
      </h1>
      <div class="blog-list-page__list">
        <BasePreloader
            v-if="pending"
            :overlay="!!data"
            size="large"
            style="min-height: 100px"
        />

        <ArticlePreview
            v-for="article in data?.data"
            :key="article.id"
            :article="article"
            v-motion-fade-up
            class="blog-list-page__item"
        />
      </div>

      <BasePagination
          v-if="data"
          :totalPages="totalPages"
          class="blog-list-page__pagination"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useApiLanguage } from '~/composables/useApiLanguage'

const { t } = useI18n();

const route = useRoute()
const language = useApiLanguage()
const limit = 1
const page = computed(() => parseInt(route.query.page as string || '') || 1)

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
      }
    },
    limit: limit,
    page: page.value,
    'sort': '-published_date',
    meta: '*',
  }
})

const { data, pending } = useFetch('https://cms.korbil.io/items/blogs', {
  query: query,
  watch: [page]
})

const totalPages = computed(() => {
  const total = data.value?.meta?.filter_count || 0

  return Math.ceil(total / limit)
})
</script>

<style lang="scss">
.blog-list-page {

  &__content {
    padding: 80px 0;
  }

  &__title {
    margin: 0 0 40px;

    font-size: 56px;
    text-align: center;
  }

  &__list {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    min-height: 100px;
  }

  &__item {
    width: 100%;
  }

  & &__pagination {
    margin-top: 46px;
  }

  @include media-md {
    &__list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include media-sm {
    &__title {
      font-size: 40px;
    }
  }

  @include media-xs {
    &__list {
      grid-template-columns: 1fr;
    }
  }
}
</style>