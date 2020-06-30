<template>
  <vue-ads-layout
      :full-bar="false"
  >
      <vue-ads-bar
          slot="toolbar"
          :fixed="true"
          class="bg-red"
      >
          <vue-ads-hide-button
              slot="first"
              :hidden="hiddenLeft"
              @clicked="hideLeft"
          />
          <vue-ads-hide-button
              slot="last"
              :hidden="hiddenRight"
              @clicked="hideRight"
          />
      </vue-ads-bar>
      <vue-ads-bar
          slot="footer"
          :fixed="true"
          :footer="true"
          class="bg-green"
      />
      <vue-ads-drawer
          slot="left-drawer"
          :fixed="true"
          :minified="minifiedLeft"
          :hidden="hiddenLeft"
          class="bg-yellow"
          @minify="minifyLeft"
          @hide="hideLeft"
      >
          <div slot="top">Navigation</div>
          <vue-ads-minify-button
              slot="bottom"
              :minified="minifiedLeft"
              @clicked="minifyLeft"
          />
      </vue-ads-drawer>
      <vue-ads-drawer
          slot="right-drawer"
          :fixed="false"
          :minified="minifiedRight"
          :hidden="hiddenRight"
          :right="true"
          class="bg-blue"
          @minify="minifyRight"
          @hide="hideRight"
      >
          <div slot="top">Navigation</div>
          <vue-ads-minify-button
              slot="bottom"
              :right="true"
              :minified="minifiedRight"
              @clicked="minifyRight"
          />
      </vue-ads-drawer>

      <router-view :key="$route.path +'.'+ JSON.stringify($route.query)"/>

  </vue-ads-layout>
</template>

<script>
// import '@fontawesome/fontawesome-free/css/all.css'
import 'vue-ads-layout/dist/vue-ads-layout.css'

import { VueAdsLayout, VueAdsBar, VueAdsDrawer, VueAdsHideButton, VueAdsMinifyButton } from 'vue-ads-layout'

export default {
  name: 'App',

  components: {
    VueAdsMinifyButton,
    VueAdsHideButton,
    VueAdsDrawer,
    VueAdsBar,
    VueAdsLayout,
  },

  data () {
    return {
      minifiedLeft: false,
      minifiedRight: false,
      hiddenLeft: false,
      hiddenRight: false,
    }
  },

  methods: {
    minifyLeft (minified) {
      this.minifiedLeft = minified
    },

    hideLeft (hidden) {
      this.hiddenLeft = hidden
    },

    minifyRight (minified) {
      this.minifiedRight = minified
    },

    hideRight (hidden) {
      this.hiddenRight = hidden
    },
  }
}
</script>
