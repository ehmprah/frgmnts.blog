<template>
  <div class="page">
    <Header class="page__header" />
    <main class="page__content">
      <h1>404</h1>
      <p>Oh no, nothing here!</p>
      <a href="/">Go home</a>
    </main>
    <header class="page__footer">
      <Footer />
    </header>
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  mounted() {
    console.log(this.$site);
    console.log(this.$page);
  },
  computed: {
    type: function() {
      if (this.$page.frontmatter.type) {
        return this.$page.frontmatter.type;
      }
      return '';
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="@theme/styles/page.scss" lang="scss"></style>
