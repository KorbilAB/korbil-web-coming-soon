<template>
  <form
      class="join-wait-list-form"
      @submit.prevent="onSubmit"
  >
    <div class="join-wait-list-form__item">
      <label
          for="join-wait-list-form_name"
          class="join-wait-list-form__label">
        {{ t('join-wait-list-form.inputs.name') }}
      </label>
      <div class="join-wait-list-form__input-wrapper">
        <input
            v-model="formData.name"
            type="text"
            id="join-wait-list-form_name"
            :placeholder="t('join-wait-list-form.placeholders.name')"
            class="join-wait-list-form__input"
        >
      </div>
    </div>

    <div class="join-wait-list-form__item">
      <label
          for="join-wait-list-form_phone"
          class="join-wait-list-form__label">
        {{ t('join-wait-list-form.inputs.phone') }}
      </label>
      <div class="join-wait-list-form__input-wrapper">
        <input
            v-model="formData.phone"
            type="tel"
            id="join-wait-list-form_phone"
            :placeholder="t('join-wait-list-form.placeholders.phone')"
            class="join-wait-list-form__input"
        >
      </div>
    </div>

    <div class="join-wait-list-form__item">
      <label
          for="join-wait-list-form_email"
          class="join-wait-list-form__label">
        {{ t('join-wait-list-form.inputs.email') }}
      </label>
      <div class="join-wait-list-form__input-wrapper">
        <input
            v-model="formData.email"
            type="email"
            id="join-wait-list-form_email"
            :placeholder="t('join-wait-list-form.placeholders.email')"
            class="join-wait-list-form__input"
        >
      </div>
    </div>

    <div class="join-wait-list-form__item">
      <label
          for="join-wait-list-form_location"
          class="join-wait-list-form__label">
        {{ t('join-wait-list-form.inputs.location') }}
      </label>
      <div class="join-wait-list-form__input-wrapper">
        <IconsIconArrowDown class="join-wait-list-form__select-arrow"/>
        <select
            v-model="formData.location"
            id="join-wait-list-form_location"
            class="join-wait-list-form__input _select"
        >
          <option
              disabled
              selected
              value
          >
            {{ t('join-wait-list-form.placeholders.location') }}
          </option>
          <option
              v-for="location in locations"
              :key="location"
              :value="location"
          >
            {{ location }}
          </option>
        </select>
      </div>
    </div>

    <div class="join-wait-list-form__item">
      <label
          for="join-wait-list-form_visionTestCompleted"
          class="join-wait-list-form__label">
        {{ t('join-wait-list-form.inputs.vision-test-completed') }}
      </label>
      <div class="join-wait-list-form__input-wrapper">
        <IconsIconArrowDown class="join-wait-list-form__select-arrow"/>
        <select
            v-model="formData.visionTestCompleted"
            id="join-wait-list-form_visionTestCompleted"
            class="join-wait-list-form__input  _select"
        >
          <option
              disabled
              selected
              value
          >
            {{ t('join-wait-list-form.placeholders.vision-test-completed') }}
          </option>
          <option
              value="Yes"
          >
            {{ t('join-wait-list-form.boolean-options.true') }}
          </option>
          <option
              value="No"
          >
            {{ t('join-wait-list-form.boolean-options.false') }}
          </option>
        </select>
      </div>
    </div>

    <BaseBtn
        type="submit"
        class="join-wait-list-form__btn"
    >
      {{ t('join-wait-list-form.btn') }}
    </BaseBtn>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  location: '',
  visionTestCompleted: '',
})

const locations = [
  'Stockholm',
  'Borlänge',
  'Malmö',
  'Göteborg',
  'Eskilstuna',
]

function onSubmit() {

}
</script>

<style lang="scss">
.join-wait-list-form {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__label {
    display: block;
    margin: 0 0 10px;

    font-size: 14px;
    line-height: 20px;
    color: $c-teal;
  }

  &__input-wrapper {
    position: relative;
  }

  &__input {
    width: 100%;
    border: 0 !important;
    padding: 10px 12px;
    border-radius: $radius;
    background-color: transparent !important;
    box-shadow: 0 0 0 1px $c-teal-lighter;

    font-family: inherit;
    font-weight: inherit;
    font-size: 14px;
    line-height: 20px;
    color: $c-teal;

    transition: $time;

    //-webkit-appearance: none;
    //-moz-appearance: none;
    //appearance: none;

    //&::-webkit-outer-spin-button,
    //&::-webkit-inner-spin-button {
    //  -webkit-appearance: none;
    //  margin: 0;
    //}
    //
    ///* Firefox */
    //&[type=number] {
    //  -moz-appearance: textfield;
    //}

    &:focus {
      box-shadow: 0 0 0 1px $c-teal-semi-light;
    }

    &::placeholder {
      color: $c-teal-light;
    }
  }

  &__input._select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &__select-arrow {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 14px;
    height: 14px;
  }

  &__btn {
    width: 100%;
  }

  @include media-sm {

  }
}
</style>