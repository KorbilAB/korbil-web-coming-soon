<template>
  <div class="order-page  g-container">
    <div class="order-page__content  g-container-inner-small">
      <h1 class="order-page__title">
        Confirm Booking
      </h1>

      <div class="order-page__order">
        <div class="order-page__order-content">
          <div class="order-page__section">
            <div class="order-page__section-header">
              You are about to confirm the booking.
            </div>

            <div class="div order-page__course-name">
              Fast Track to Freedom
            </div>

            <ul class="order-page__course-details">
              <li class="order-page__course-details-item">
                <IconLessons class="order-page__course-details-item-icon"/>
                <div class="order-page__course-details-item-main">
                  <div class="order-page__course-details-item-title">
                    {{ t('order-page.details.number-of-lessons') }}
                  </div>
                  6 Lessons
                </div>
              </li>
              <li class="order-page__course-details-item">
                <IconTimeFilled class="order-page__course-details-item-icon"/>
                <div class="order-page__course-details-item-main">
                  <div class="order-page__course-details-item-title">
                    {{ t('order-page.details.duration') }}
                  </div>
                  10 hours
                </div>
              </li>
            </ul>
          </div>

          <div class="order-page__section">
            <div class="order-page__section-title">
              {{ t('order-page.summary-title') }}
            </div>

            <ul class="order-page__summary">
              <li>
                <span>{{ t('order-page.summary.price') }}</span>
                <span>249 kr</span>
              </li>
              <li>
                <span>{{ t('order-page.summary.discount') }}</span>
                <span>-99 kr</span>
              </li>
              <li>
                <span>{{ t('order-page.summary.fee') }}</span>
                <span>15 kr</span>
              </li>
              <li class="order-page__summary-total">
                <span>{{ t('order-page.summary.total') }}</span>
                <span>2540 kr</span>
              </li>
            </ul>
          </div>

          <div class="order-page__section">
            <div class="order-page__section-title">
              {{ t('order-page.payment-method-title') }}
            </div>

            <BaseBtn
                :icon-prepend="IconPlus"
                class="order-page__add-payment-method-btn">
              {{ t('order-page.add-payment-method-btn') }}
            </BaseBtn>
          </div>
        </div>

        <div class="order-page__footer">
          <div class="order-page__footer-main">
            <div class="order-page__price-title">
              {{ t('order-page.price') }}
            </div>
            <div class="order-page__price-wrapper">
              <div class="order-page__price">
                259
                <sub>{{ t('order-page.currency') }}</sub>
              </div>
              •
              <div class="order-page__prev-price">300</div>
            </div>
          </div>

          <BaseBtn
              class="order-page__btn"
          >
            {{ t('order-page.book-btn-add-payment-method-btn') }}
          </BaseBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSetBreadCrumbs } from '~/composables/useSetBreadCrumbs'
import IconTimeFilled from '~/components/icons/IconTimeFilled.vue'
import IconLessons from '~/components/icons/IconLessons.vue'
import IconPlus from '~/components/icons/IconPlus.vue'

definePageMeta({
  layout: 'search',
})

useSetBreadCrumbs([{
  title: ' Confirm Booking'
}])

const { t } = useI18n()
</script>

<style lang="scss">
.order-page {
  &__content {
    padding: 24px 0 80px;
  }

  &__title {
    margin: 0 0 24px;

    font-size: 32px;
    font-weight: $w-Poppins-semi-bold;
  }

  &__order {
    background-color: white;
    border-radius: $radius-l;
  }

  &__order-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }

  &__section {
    padding: 16px;
    border-radius: $radius-l;
    background-color: white;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
  }

  &__section-title {
    margin-bottom: 16px;

    font-weight: $w-Poppins-semi-bold;
    font-size: 14px;
    line-height: 18px;
    color: $c-gray-black;
  }

  &__section-header {
    position: relative;
    padding: 16px 16px 24px;
    margin: -16px -16px 16px;
    border-radius: $radius-l $radius-l 0 0;
    background-color: #8590A2;

    text-align: center;
    font-size: 14px;
    color: white;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: $radius;
      border-radius: $radius $radius 0 0;
      background-color: white;
    }
  }

  &__course-name {
    margin-bottom: 24px;

    font-weight: $w-Poppins-semi-bold;
    font-size: 24px;
    line-height: 32px;
    color: $c-gray-black;
  }

  &__course-details {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__course-details-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    color: #172B4D;
  }

  &__course-details-item-icon {
    width: 24px;
    height: 24px;
    color: #626F86;
  }

  &__course-details-item-main {
    width: 50%;
    flex-grow: 1;
  }

  &__course-details-item-title {
    margin-bottom: 2px;

    font-size: 12px;
    line-height: 16px;

    color: #626F86;
  }

  &__summary {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    color: $c-gray-black;

    & li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
  }

  &__summary-total {
    padding-top: 12px;
    border-top: 2px dashed #D1D1D6;

    font-weight: $w-Poppins-semi-bold;
  }

  &__add-payment-method-btn {
    width: 100%;
    background-color: #EFEEEE;

    color: $c-teal;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 24px 24px;
    border-top: 1px solid $c-gray-lighter;
    box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 $radius-l $radius-l;
  }

  &__footer-main {
    width: 50%;
    flex-grow: 1;
  }

  &__price-title {
    font-size: 12px;
    line-height: 16px;
    color: #626F86;
  }

  &__price-wrapper {
    width: 50%;
    flex-grow: 1;
    display: flex;
    align-items: baseline;
    gap: 6px;

    color: #8590A2;
  }

  &__prev-price {
    font-size: 12px;
    line-height: 14px;
    color: $c-orange;
    text-decoration: line-through;
  }

  &__price {
    font-weight: $w-DMSans-semi-bold;
    font-size: 18px;
    color: #626F86;

    & sub {
      bottom: 0;

      font-size: 12px;
      font-weight: $w-DMSans-regular;
    }
  }

  @include media-sm {
    &__order-content {
      padding: 16px 12px;
    }

    &__course-name {
      font-size: 18px;
      line-height: 28px;
    }

    &__footer {
      flex-direction: column;
      align-items: stretch;
    }

    &__footer-main {
      width: 100%;
    }
  }
}
</style>