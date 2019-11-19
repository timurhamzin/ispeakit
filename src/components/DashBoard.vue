<template>
  <div>
    Lexemes: {{ lexemes }}
  </div>
</template>>

<script>
export default {
  // data () {
  //   return {
  //     lexemes: this.$store.getters.lexemes
  //   }
  // }
  computed: {
    lexemes () {
      return this.$store.state.lexemes
    }
  }
}
</script>

<style>

</style>
