<template>
  <div>
    {{this.lastViewedLexeme}}
  </div>
</template>>

<script>
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
              : encodeURIComponent(k) + '=' + encodeURIComponent(v)
          )
        }
      }
      return str.join('&')
    },
    translate (text, fromLang, toLang) {
      // var API_KEY_DICT = 'dict.1.1.20160504T082227Z.3ae50a41970727a5.c82f9dd5b83ce1eeccb9b5a35faf42712e9608b4'
      var API_KEY_TRANS = 'trnsl.1.1.20160504T085023Z.3a0c0aab2bdd4774.7fd9d801d4ca73846151ec98418a94568793d90c'
      let queryObj = {
        // url: 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup',
        url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
        dataType: 'json',
        data: {
          key: API_KEY_TRANS,
          text: text,
          lang: fromLang + '-' + toLang
        }
      }
      let queryStr = this.objToQueryStr(queryObj, 'lookup')
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
    // translateTest()
    // Call example: https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=APIkey&lang=en-ru&text=time
    // let yandexTranslateApiKey = 'trnsl.1.1.20181030T164747Z.50350640be185f5d.a9c2d0892171111c7027edd85669141908d3301a'

    // var API_KEY_DICT = 'dict.1.1.20160504T082227Z.3ae50a41970727a5.c82f9dd5b83ce1eeccb9b5a35faf42712e9608b4'
    var API_KEY_TRANS = 'trnsl.1.1.20160504T085023Z.3a0c0aab2bdd4774.7fd9d801d4ca73846151ec98418a94568793d90c'
    // https://tech.yandex.com/keys

    // translate("car",'en','es')
    // definition("car",'en','en')

    let fromLang = 'en'
    let toLang = 'ru'
    let queryObj = {
      // url: 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup',
      url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
      dataType: 'json',
      data: {
        key: API_KEY_TRANS,
        text: 'text',
        lang: fromLang + '-' + toLang
      }
    }
    let queryStr = this.objToQueryStr(queryObj, 'lookup')
    console.log(queryStr)
    console.log(this.translate('text', 'en', 'ru'))
  }
}
</script>

<style>

</style>
