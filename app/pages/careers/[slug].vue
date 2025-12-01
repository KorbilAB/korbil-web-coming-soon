<template>
  <div class="career-page  g-container">
    <div class="career-page__content  g-container-inner">
      <div class="career-page__main">
        <div class="career-page__header">
          <h1
              v-motion-fade-up
              class="career-page__title"
          >
            Co-Founder - Marketing & Sales Specialist at Körbil
          </h1>
          <div class="career-page__chips">
            <BaseChip
                v-motion-fade-up
                :delay="200"
            >
              <IconTime style="width: 16px; height: 17px;"/>
              Full time/ Part time
            </BaseChip>
            <BaseChip
                v-motion-fade-up
                :delay="300"
            >
              <IconMapPoint style="width: 16px; height: 17px;"/>
              Sweden
            </BaseChip>
            <BaseChip
                v-motion-fade-up
                :delay="400"
            >
              <IconRemote style="width: 16px; height: 17px;"/>
              Remote
            </BaseChip>
          </div>

          <BaseBtn
              v-motion-fade-up
              :delay="500"
              class="career-page__apply-btn"
          >
            Apply Now
          </BaseBtn>
        </div>

        <BaseText
            v-motion-fade-up
            :delay="600"
        >
          <h2>About Körbil</h2>
          <p>Körbil is a new technology startup on a mission to redefine driving education in Sweden. We are building a
            digital platform that connects students with certified driving schools and leverages AI-driven tools to
            personalize the learning journey, offer interactive theory training, and create a smoother, smarter way to
            learn driving.</p>
          <h2>Your Role</h2>
          <ul>
            <li>As the Co-Founder & Marketing/Sales Specialist, you will:</li>
            <li>Develop and lead go-to-market strategies to drive adoption of Körbil’s platform.</li>
            <li>Build partnerships with driving schools and industry stakeholders.</li>
            <li>Shape and execute marketing campaigns (digital, social media, branding, PR).</li>
          </ul>
        </BaseText>

        <BaseBtn
            v-motion-fade-up
            :delay="600"
            class="career-page__apply-btn"
        >
          Apply Now
        </BaseBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconRemote from "~/components/icons/IconRemote.vue";
import IconMapPoint from "~/components/icons/IconMapPoint.vue";
import IconTime from "~/components/icons/IconTime.vue";
</script>

<style lang="scss">
.career-page {
  &__content {
    padding: 40px 0;
  }

  &__main {
    padding: 80px;
    border-radius: $radius-xl;
    background-color: $c-gray-lightest;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__header {

  }

  &__title {
    margin: 0 0 12px;

    font-size: 36px;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 12px;
  }

  &__apply-btn {
    align-self: flex-start;
  }

  @include media-sm {
    &__main {
      padding: 24px;
    }

    &__title {
      font-size: 32px;
    }
  }
}
</style>