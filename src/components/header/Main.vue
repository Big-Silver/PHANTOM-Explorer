<template>
  <header
    class="header min-h-50px md:min-h-80px z-50 max-w-2xl mx-auto flex bg-theme-nav-background shadow-theme xl:rounded-md mb-5 sm:mb-10">
    <router-link
      :to="{ name: 'home' }"
      class="logo-container w-50px md:w-80px h-50px md:h-80px flex-none bg-black text-2xl xl:rounded-l-md flex justify-center items-center">
      <img class="logo max-w-25px md:max-w-38px" src="@/assets/images/phantom-icon.svg" />
    </router-link>

    <div class="w-full relative hidden xl:flex">
      <header-search v-if="headerType === 'search'" v-click-outside="closeHeader"></header-search>

      <header-desktop-currencies v-else-if="headerType === 'currencies'"></header-desktop-currencies>

      <header-desktop-languages v-else-if="headerType === 'languages'"></header-desktop-languages>

      <header-default v-else></header-default>

      <header-desktop-menu v-if="menuVisible"></header-desktop-menu>
    </div>
    <div class="w-full relative flex xl:hidden">
      <header-search v-if="headerType === 'search'"></header-search>

      <header-default v-else></header-default>
    </div>
    <header-mobile-menu v-if="menuVisible"></header-mobile-menu>

    <header-mobile-currencies v-else-if="headerType === 'currencies'"></header-mobile-currencies>

    <header-mobile-languages v-else-if="headerType === 'languages'"></header-mobile-languages>

  </header>
</template>

<script type="text/ecmascript-6">
import HeaderDefault from '@/components/header/Default'
import HeaderSearch from '@/components/header/Search'
import HeaderDesktopCurrencies from '@/components/header/currencies/Desktop'
import HeaderMobileCurrencies from '@/components/header/currencies/Mobile'
import HeaderDesktopLanguages from '@/components/header/languages/Desktop'
import HeaderMobileLanguages from '@/components/header/languages/Mobile'
import HeaderDesktopMenu from '@/components/header/menu/Desktop'
import HeaderMobileMenu from '@/components/header/menu/Mobile'
import { mapGetters } from 'vuex'

export default {
  components: {
    HeaderDefault,
    HeaderSearch,
    HeaderDesktopCurrencies,
    HeaderMobileCurrencies,
    HeaderDesktopLanguages,
    HeaderMobileLanguages,
    HeaderDesktopMenu,
    HeaderMobileMenu,
  },

  computed: {
    ...mapGetters('ui', ['headerType', 'menuVisible']),
  },

  methods: {
    closeHeader () {
      this.$store.dispatch('ui/setHeaderType', null)
    }
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
}
</style>
