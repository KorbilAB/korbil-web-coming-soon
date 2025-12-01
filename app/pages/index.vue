<template>
  <div class="home-page">
    <NewHerroSection
        v-if="config.public.version === EVersion.SEARCH"
        class="home-page__new-herro-section"
    />

    <HerroSection v-else/>

    <HowItWorksSection/>

    <EarlyAccessBenefitsSection/>

    <SmartFeaturesSection/>

    <AboutUsSection/>

    <FAQSection/>

    <JoinWaitListSection/>
  </div>
</template>

<script setup lang="ts">
import { EVersion } from '~~/types/version.enum'

const config = useRuntimeConfig()
</script>

<style lang="scss">
.home-page {
  padding-bottom: 80px;

  &__new-herro-section {
    margin-bottom: 80px;
  }
}
</style>