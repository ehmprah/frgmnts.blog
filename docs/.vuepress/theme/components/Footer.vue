<template>
  <div class="footer">
    <ul class="footer__nav">
      <li>
        <a type="application/rss+xml" href="/rss.xml">RSS</a>
      </li>
      <li>
        <a type="application/rss+xml" href="/newsletter.html">Subscribe</a>
      </li>
      <li>
        <a href="/about.html">About</a>
      </li>
      <li>
        <a href="/imprint.html">Imprint</a>
      </li>
    </ul>

    <Follow />
    <div class="footer__copyright">&copy; {{ year }} all rights reserved</div>
  </div>
</template>

<script>
import Follow from '@theme/components/Follow.vue';

export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  components: {
    Follow,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';
.footer {
  border-top: 1px solid $border-color;
  margin-top: 2em;
  padding-top: 1.5em;

  &__nav {
    margin: 0 0 1.5em;
    padding: 0;
    text-align: center;
    font-size: 0.75em;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    list-style-type: none;
    a,
    a:visited {
      color: $color-text-dark;
    }
  }

  &__copyright {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75em;
    margin-bottom: 1em;
  }
}

@media only screen and (min-width: 480px) {
  .footer__nav {
    li {
      display: inline;
    }
    li:before {
      content: '\2022';
      margin: 0 10px 0 7px;
    }
    li:first-of-type:before {
      content: none;
    }
  }
}
</style>
