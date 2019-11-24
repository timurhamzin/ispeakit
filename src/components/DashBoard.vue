<template>
  <div>
    {{this.lastViewedLexeme}}
  </div>
</template>>

<script>
import config from '../config.js'

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
    objToQueryStr: function (obj, prefix) {
      var str = []
      var p
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + '[' + p + ']' : p
          var v = obj[p]
          str.push(
            v !== null && typeof v === 'object'
              ? this.objToQueryStr(v, k)
              : k === 'url' ? v : k + '=' + v
              // : encodeURIComponent(k) + '=' + encodeURIComponent(v)
          )
        }
      }
      return str.join('&')
    },
    yaDict (text, fromLang, toLang, transl) {
      // Call example: https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=APIkey&lang=en-ru&text=time
      // 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?'
      let queryObj = {
        url: transl ? config.URL_TRANSL : config.URL_DICT,
        dataType: 'json',
        key: transl ? config.API_KEY_TRANSL : config.API_KEY_DICT,
        text: text,
        lang: fromLang + '-' + toLang
      }
      let queryStr = this.objToQueryStr(queryObj, '')
      this.$axios(
        queryStr).then(result => {
        console.log(result)
      }).catch(function (request, error, exception) {
        console.log(error + '---' + exception + '---' + request)
        console.log(request)
      })
    }
  },
  mounted () {
    let fromLang = 'en'
    let toLang = 'ru'
    this.yaDict('text', fromLang, toLang, true)
  }
}
</script>

<style>

</style>
