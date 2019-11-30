<template>
  <div>
    {{this.lastViewedLexeme}}
  </div>
</template>>

<script>
// import config from '../config.js'

export default {
  computed: {
    // lexemes () {
    //   return this.$store.state.lexemes
    // }
    lastViewedLexeme () {
      let lexemesCount = this.$store.state.lexemes['count']
      if (lexemesCount) {
        let storedLexeme = this.$store.state.lexemes[this.$store.state.lastViewedLexeme.elId]
        if (storedLexeme) {
          return storedLexeme
        } else {
          return 'Click on any word to add it to your dictionary'
        }
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style>

</style>
