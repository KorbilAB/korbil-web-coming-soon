<template>
  <div class="school-about-page">
    <div class="school-about-page__info-sections">
      <section class="school-about-page__info-section">
        <h2 class="school-about-page__info-section-title">
          Overview
        </h2>
        <p class="school-about-page__info-section-description">
          My Driving Academy, Globen, offers driving lessons for both automatic and manual cars, as well as services
          such
          as Risk 1 and Risk 2 training.
        </p>
      </section>
      <section class="school-about-page__info-section">
        <ul class="school-about-page__contacts">
          <li class="school-about-page__contact">
            <IconPhone class="school-about-page__contact-icon"/>
            <a href="tel:+462422660" class="school-about-page__contact-text">+46 242 26 60</a>
            <a href="tel:+462422660" class="school-about-page__contact-link">
              <IconPhone/>
            </a>
          </li>
          <li class="school-about-page__contact">
            <IconMapPointFilled class="school-about-page__contact-icon"/>
            <span class="school-about-page__contact-text">Bildhuggarvägen 1, 121 44 Stockholm, Sweden</span>
            <a href="#" class="school-about-page__contact-link">
              <IconMap/>
            </a>
          </li>
          <li class="school-about-page__contact">
            <IconTimeFilled class="school-about-page__contact-icon"/>
            <span class="school-about-page__contact-text">
              Monday-Thu, Sun 11:00-22:00<br>
              Fri, Sat 11:00-23:00
            </span>
          </li>
        </ul>
      </section>
    </div>

    <h2 class="school-about-page__section-title">
      Our Vehicles
    </h2>

    <section class="school-about-page__cars-list">
      <CarPreview/>
      <CarPreview/>
      <CarPreview/>
    </section>


    <h2 class="school-about-page__section-title">
      Our Team
    </h2>

    <section class="school-about-page__instructors-list">
      <InstructorPreview/>
      <InstructorPreview/>
      <InstructorPreview/>
    </section>


    <h2 class="school-about-page__section-title">
      Reviews
    </h2>

    <section class="school-about-page__reviews-list">
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
    </section>
  </div>
</template>

<script setup lang="ts">
import IconPhone from '~/components/icons/IconPhone.vue'
import IconMap from '~/components/icons/IconMap.vue'
import IconMapPointFilled from '~/components/icons/IconMapPointFilled.vue'
import IconTimeFilled from '~/components/icons/IconTimeFilled.vue'

definePageMeta({
  scrollToTop: (to, from) => {
    return to.params.slag === from.params.slug
  }
})
</script>

<style lang="scss">
.school-about-page {
  border-radius: $radius-l;
  background-color: white;
  padding: 24px;

  &__info-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }

  &__info-section {
    padding: 16px;
    border: 1px solid $c-gray-lighter;
    border-radius: $radius;
  }

  &__info-section-title {
    margin: 0 0 16px;

    font-size: 18px;
    font-weight: $w-DMSans-semi-bold;
  }

  &__info-section-description {
    margin: 0;
  }

  &__contacts {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__contact {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;

    font-size: 14px;
    line-height: 20px;
    color: #172B4D;
  }

  &__contact-icon {
    width: 24px;
    height: 24px;
    color: #626F86;
  }

  &__contact-text {
    width: 50%;
    flex-grow: 1;

    text-decoration: none;
    color: inherit;
  }

  &__contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $c-gray-lightest;

    text-decoration: none;
    color: #626F86;

    & svg {
      width: 20px;
      height: 20px;
    }
  }

  &__section-title {
    margin: 0 0 16px;

    font-family: $ff-DMSans;
    font-weight: $w-DMSans-semi-bold;
    font-size: 18px;
  }

  &__cars-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 40px;
  }

  &__instructors-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 40px;
  }

  &__reviews-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  @include media-sm {
    &__info-sections {
      grid-template-columns: 1fr;
    }

    &__cars-list {
      grid-template-columns: 1fr 1fr;
    }

    &__instructors-list {
      grid-template-columns: 1fr 1fr;
    }

    &__reviews-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include media-xs {
    &__cars-list {
      grid-template-columns: 1fr;
    }

    &__instructors-list {
      grid-template-columns: 1fr;
    }

    &__reviews-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>