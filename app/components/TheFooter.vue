<template>
  <footer class="the-footer  g-container">
    <div class="the-footer__content g-container-inner">
      <div class="the-footer__main">
        <div class="the-footer__nav-wrapper">
          <TheLogo
              color="white"
              class="the-footer__logo"
          />

          <nav class="the-footer__menu">
            <NuxtLinkLocale
                to="/#hero"
                class="the-footer__menu-link"
            >
              {{ t('the-footer.menu.home') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
                to="/#how-it-works"
                class="the-footer__menu-link"
            >
              {{ t('the-footer.menu.how-it-works') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
                to="/#early-access-benifits"
                class="the-footer__menu-link"
            >
              {{ t('the-footer.menu.early-access-benefits') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
                to="/blogs"
                class="the-footer__menu-link"
            >
              {{ t('the-footer.menu.blogs') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
                to="/#frequently-asked-questions"
                class="the-footer__menu-link"
            >
              {{ t('the-footer.menu.faq') }}
            </NuxtLinkLocale>
          </nav>
        </div>

        <SocLinks class="the-footer__soc"/>
      </div>

      <div class="the-footer__bottom">
        <p class="the-footer__copyright">© 2025 Körbil · Built with ❤️ in 🇸🇪</p>
        <div class="the-footer__bottom-links">
          <NuxtLinkLocale
              to="/#"
              class="the-footer__bottom-link"
          >
            Terms of service
          </NuxtLinkLocale>
          <NuxtLinkLocale
              to="/#"
              class="the-footer__bottom-link"
          >
            Privacy policy
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss">
.the-footer {
  background-color: $c-teal-dark;

  color: white;

  &__content {
    padding: 80px 0 160px;
  }

  &__main {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  &__nav-wrapper {
    width: 50%;
    flex-grow: 1;
  }

  &__logo {
    margin-bottom: 38px;
  }

  &__menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;
  }

  &__menu-link {
    text-decoration: none;

    transition: $time;

    @include hover {
      opacity: 0.6;
      color: white;
    }
  }

  &__soc {

  }

  &__bottom {
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid $c-teal-light;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  &__copyright {
    margin: 0;

    color: $c-teal-light;
  }

  &__bottom-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px 24px;
  }

  &__bottom-link {
    font-size: 14px;
    text-decoration: none;

    transition: $time;

    @include hover {
      opacity: 0.6;
      color: white;
    }
  }

  @include media-sm {
    &__content {
      padding: 60px 0;
    }

    &__main {
      flex-direction: column;
      gap: 32px;
    }

    &__nav-wrapper {
      display: flex;
      flex-direction: column-reverse;
      gap: 32px;
    }

    &__logo {
      margin: 0;
    }

    &__menu {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    &__bottom {
      flex-direction: column-reverse;
    }
  }
}
</style>