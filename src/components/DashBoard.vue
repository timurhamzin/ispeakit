<template>
  <div>
    Lexemes: {{this.lexemes}}
  </div>
</template>>

<script>
export default {
  computed: {
    lexemes () {
      return this.$store.state.lexemes
    }
  }
}
</script>

<style>

</style>
